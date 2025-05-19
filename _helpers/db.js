// db.js - Modified with enhanced error handling and debugging
let config;

try {
    // Attempt to load config using absolute path
    config = require(process.cwd() + '/config');
    console.log('Config loaded successfully using absolute path');
} catch (error) {
    console.error('Error loading config with absolute path:', error.message);
    
    try {
        // Fallback to relative path
        config = require('../config');
        console.log('Config loaded successfully using relative path');
    } catch (error) {
        console.error('Error loading config with relative path:', error.message);
        
        // Provide a hardcoded fallback configuration
        console.log('Using hardcoded fallback configuration');
        config = {
            database: {
                host: "153.92.15.31",
                port: 3306,
                user: "u875409848_cudillo",
                password: "9T2Z5$3UKkgSYzE",
                database: "u875409848_cudillo"
            }
        };
    }
}

// Print config object for debugging
console.log('Config object:', JSON.stringify({
    'database.host': config.database?.host,
    'database.user': config.database?.user,
    'database.database': config.database?.database
}, null, 2));

const mysql = require('mysql2/promise');
const { Sequelize, DataTypes } = require('sequelize');

module.exports = db = {};

initialize();

async function initialize() {
    try {
        // Use destructuring with fallbacks to prevent errors if properties are missing
        const { 
            host = "153.92.15.31", 
            port = 3306, 
            user = "u875409848_cudillo", 
            password = "9T2Z5$3UKkgSYzE", 
            database = "u875409848_cudillo" 
        } = config.database || {};
        
        console.log('Using database configuration:');
        console.log(`Host: ${host}, Port: ${port}, User: ${user}, Database: ${database}`);
        
        // Ensure essential DB config is present
        if (!host || !port || !user || !database) {
            console.error("FATAL ERROR: Missing database configuration in environment variables or config/index.js.");
            console.error("Host:", host, "Port:", port, "User:", user, "Database:", database);
            process.exit(1);
        }

        // Create db if it doesn't already exist
        console.log('Creating connection to MySQL server...');
        const connection = await mysql.createConnection({ host, port, user, password });
        console.log('Connected to MySQL server successfully');
        
        console.log(`Creating database ${database} if it doesn't exist...`);
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`);
        console.log('Database creation query executed');
        
        await connection.end();
        console.log('Initial connection closed');

        // Connect to db using config values
        console.log('Connecting to database with Sequelize...');
        const sequelize = new Sequelize(database, user, password, {
            host: host,
            port: port,
            dialect: 'mysql',
            logging: false
        });
        
        console.log('Sequelize connection established');

        // Initialize models in correct dependency order
        console.log('Initializing models...');
        
        // Initialize models in dependency order
        db.Account = require('../accounts/account.model')(sequelize);
        db.Department = require('../departments/department.model')(sequelize);
        db.RefreshToken = require('../accounts/refresh-token.model')(sequelize);
        db.Employee = require('../employees/employee.model')(sequelize);
        db.Request = require('../requests/request.model')(sequelize);
        db.RequestItem = require('../requests/request-item.model')(sequelize);
        
        console.log('Models initialized');

        // Define relationships in order
        console.log('Setting up relationships...');
        
        // Account - RefreshToken relationship
        db.Account.hasMany(db.RefreshToken, { 
            foreignKey: {
                name: 'accountId',
                type: DataTypes.INTEGER,
                allowNull: false
            },
            onDelete: 'CASCADE'
        });
        db.RefreshToken.belongsTo(db.Account);

        // Account - Employee relationship
        db.Account.hasOne(db.Employee, { 
            foreignKey: {
                name: 'userId',
                type: DataTypes.INTEGER,
                allowNull: false
            },
            as: 'employee',
            onDelete: 'CASCADE'
        });
        db.Employee.belongsTo(db.Account, { as: 'user' });

        // Department - Employee relationship
        db.Department.hasMany(db.Employee, { 
            foreignKey: {
                name: 'departmentId',
                type: DataTypes.INTEGER,
                allowNull: true
            },
            as: 'employees',
            onDelete: 'SET NULL'
        });
        db.Employee.belongsTo(db.Department, { as: 'department' });

        // Employee - Request relationship
        db.Employee.hasMany(db.Request, {
            foreignKey: {
                name: 'employeeId',
                type: DataTypes.INTEGER,
                allowNull: false
            },
            as: 'requests',
            onDelete: 'CASCADE'
        });
        db.Request.belongsTo(db.Employee, { as: 'employee' });

        // Request - RequestItem relationship
        db.Request.hasMany(db.RequestItem, {
            foreignKey: {
                name: 'requestId',
                type: DataTypes.INTEGER,
                allowNull: false
            },
            as: 'items',
            onDelete: 'CASCADE'
        });
        db.RequestItem.belongsTo(db.Request, { as: 'request' });

        console.log('Relationships established');
        db.sequelize = sequelize;

        // Sync database in the correct order
        console.log('Syncing database...');
        
        try {
            // Disable foreign key checks before dropping tables
            await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
            console.log('Foreign key checks disabled');

            // Drop tables in reverse dependency order
            const tables = [
                'requestItems',
                'requests',
                'employees',
                'refreshTokens',
                'departments',
                'accounts'
            ];

            console.log('Dropping existing tables...');
            for (const table of tables) {
                await sequelize.query(`DROP TABLE IF EXISTS \`${table}\``);
                console.log(`Dropped table: ${table}`);
            }

            // Create tables in dependency order with explicit options
            console.log('Creating tables in order...');
            
            // 1. Independent tables first
            await sequelize.query('CREATE TABLE IF NOT EXISTS `accounts` (' +
                '`id` INTEGER NOT NULL AUTO_INCREMENT,' +
                '`email` VARCHAR(255) NOT NULL,' +
                '`passwordHash` VARCHAR(255) NOT NULL,' +
                '`title` VARCHAR(255) NOT NULL,' +
                '`firstName` VARCHAR(255) NOT NULL,' +
                '`lastName` VARCHAR(255) NOT NULL,' +
                '`acceptTerms` BOOLEAN DEFAULT true,' +
                '`role` VARCHAR(255) NOT NULL,' +
                '`isSuperAdmin` BOOLEAN DEFAULT false,' +
                '`verificationToken` VARCHAR(255),' +
                '`verified` DATETIME,' +
                '`resetToken` VARCHAR(255),' +
                '`resetTokenExpires` DATETIME,' +
                '`passwordReset` DATETIME,' +
                '`created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,' +
                '`updated` DATETIME,' +
                'PRIMARY KEY (`id`),' +
                'UNIQUE KEY `email_unique` (`email`)' +
                ') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;');
            
            await sequelize.query('CREATE TABLE IF NOT EXISTS `departments` (' +
                '`id` INTEGER NOT NULL AUTO_INCREMENT,' +
                '`name` VARCHAR(255) NOT NULL,' +
                '`description` TEXT,' +
                '`created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,' +
                '`updated` DATETIME,' +
                'PRIMARY KEY (`id`),' +
                'UNIQUE KEY `name_unique` (`name`)' +
                ') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;');
            
            // 2. Tables depending on accounts
            await sequelize.query('CREATE TABLE IF NOT EXISTS `refreshTokens` (' +
                '`id` INTEGER NOT NULL AUTO_INCREMENT,' +
                '`accountId` INTEGER NOT NULL,' +
                '`token` VARCHAR(255) NOT NULL,' +
                '`expires` DATETIME NOT NULL,' +
                '`created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,' +
                '`createdByIp` VARCHAR(255),' +
                '`revoked` DATETIME,' +
                '`revokedByIp` VARCHAR(255),' +
                '`replacedByToken` VARCHAR(255),' +
                'PRIMARY KEY (`id`),' +
                'KEY `fk_refresh_token_account` (`accountId`),' +
                'CONSTRAINT `fk_refresh_token_account` FOREIGN KEY (`accountId`) REFERENCES `accounts` (`id`) ON DELETE CASCADE' +
                ') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;');
            
            // 3. Tables depending on accounts and departments
            await sequelize.query('CREATE TABLE IF NOT EXISTS `employees` (' +
                '`id` INTEGER NOT NULL AUTO_INCREMENT,' +
                '`employeeId` VARCHAR(255) NOT NULL,' +
                '`userId` INTEGER NOT NULL,' +
                '`departmentId` INTEGER,' +
                '`position` VARCHAR(255) NOT NULL,' +
                '`hireDate` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,' +
                '`status` ENUM("Active", "Inactive") NOT NULL DEFAULT "Active",' +
                '`created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,' +
                '`updated` DATETIME,' +
                'PRIMARY KEY (`id`),' +
                'UNIQUE KEY `employeeId_unique` (`employeeId`),' +
                'KEY `fk_employee_account` (`userId`),' +
                'KEY `fk_employee_department` (`departmentId`),' +
                'CONSTRAINT `fk_employee_account` FOREIGN KEY (`userId`) REFERENCES `accounts` (`id`) ON DELETE CASCADE,' +
                'CONSTRAINT `fk_employee_department` FOREIGN KEY (`departmentId`) REFERENCES `departments` (`id`) ON DELETE SET NULL' +
                ') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;');
            
            // 4. Tables depending on employees
            await sequelize.query('CREATE TABLE IF NOT EXISTS `requests` (' +
                '`id` INTEGER NOT NULL AUTO_INCREMENT,' +
                '`employeeId` INTEGER NOT NULL,' +
                '`type` VARCHAR(255) NOT NULL,' +
                '`status` ENUM("Pending", "Approved", "Rejected") NOT NULL DEFAULT "Pending",' +
                '`created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,' +
                '`updated` DATETIME,' +
                'PRIMARY KEY (`id`),' +
                'KEY `fk_request_employee` (`employeeId`),' +
                'CONSTRAINT `fk_request_employee` FOREIGN KEY (`employeeId`) REFERENCES `employees` (`id`) ON DELETE CASCADE' +
                ') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;');
            
            // 5. Tables depending on requests
            await sequelize.query('CREATE TABLE IF NOT EXISTS `requestItems` (' +
                '`id` INTEGER NOT NULL AUTO_INCREMENT,' +
                '`requestId` INTEGER NOT NULL,' +
                '`name` VARCHAR(255) NOT NULL,' +
                '`quantity` INTEGER NOT NULL DEFAULT 1,' +
                '`created` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,' +
                '`updated` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,' +
                'PRIMARY KEY (`id`),' +
                'KEY `fk_request_item_request` (`requestId`),' +
                'CONSTRAINT `fk_request_item_request` FOREIGN KEY (`requestId`) REFERENCES `requests` (`id`) ON DELETE CASCADE' +
                ') ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;');

            // Re-enable foreign key checks
            await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
            console.log('Foreign key checks re-enabled');
            
            console.log('Database synchronized successfully');
            
            // Return the db object for use in seeding
            return db;

        } catch (error) {
            console.error('Error during database sync:', error);
            // Re-enable foreign key checks even if there's an error
            await sequelize.query('SET FOREIGN_KEY_CHECKS = 1').catch(console.error);
            throw error;
        }

    } catch (error) {
        console.error('Fatal error during database initialization:', error);
        process.exit(1);
    }
}