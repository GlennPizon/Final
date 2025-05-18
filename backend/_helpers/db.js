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
    'database.port': config.database?.port,
    'database.user': config.database?.user,
    'database.database': config.database?.database
}, null, 2));

const mysql = require('mysql2/promise');
const { Sequelize } = require('sequelize');

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
        const sequelize = new Sequelize(
            database,
            user,
            password,
            {
               host: host,
               port: port,
               dialect: 'mysql',
               logging: console.log // Enable logging temporarily for debugging
            }
        );
        
        console.log('Sequelize connection established');

        // Disable foreign key checks before any operations
        await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');
        console.log('Foreign key checks disabled');

        try {
            // Initialize models in dependency order
            console.log('Initializing models...');
            
            // Core models first (no dependencies)
            db.Account = require('../accounts/account.model')(sequelize);
            db.Department = require('../departments/department.model')(sequelize);
            
            // Models with single dependencies
            db.RefreshToken = require('../accounts/refresh-token.model')(sequelize);
            db.Employee = require('../employees/employee.model')(sequelize);
            
            // Models with multiple dependencies
            db.Request = require('../requests/request.model')(sequelize);
            db.RequestItem = require('../requests/request-item.model')(sequelize);
            console.log('Models initialized');

            // Define relationships in order
            console.log('Setting up relationships...');
            
            // Account relationships
            db.Account.hasMany(db.RefreshToken, { 
                foreignKey: {
                    name: 'accountId',
                    allowNull: false
                },
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            });
            db.RefreshToken.belongsTo(db.Account, { 
                foreignKey: {
                    name: 'accountId',
                    allowNull: false
                }
            });

            // Account - Employee relationship
            db.Account.hasOne(db.Employee, { 
                foreignKey: 'userId',
                as: 'employee',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            });
            db.Employee.belongsTo(db.Account, { 
                foreignKey: 'userId',
                as: 'user'
            });

            // Department - Employee relationship
            db.Department.hasMany(db.Employee, { 
                foreignKey: 'departmentId',
                as: 'employees',
                onDelete: 'SET NULL',
                onUpdate: 'CASCADE'
            });
            db.Employee.belongsTo(db.Department, { 
                foreignKey: 'departmentId',
                as: 'department'
            });

            // Employee - Request relationship
            db.Employee.hasMany(db.Request, { 
                foreignKey: 'employeeId',
                as: 'requests',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            });
            db.Request.belongsTo(db.Employee, { 
                foreignKey: 'employeeId',
                as: 'employee'
            });

            // Request - RequestItem relationship
            db.Request.hasMany(db.RequestItem, { 
                foreignKey: 'requestId',
                as: 'items',
                onDelete: 'CASCADE',
                onUpdate: 'CASCADE'
            });
            db.RequestItem.belongsTo(db.Request, { 
                foreignKey: 'requestId',
                as: 'request'
            });

            console.log('Relationships established');

            db.sequelize = sequelize;

            // Drop all tables in reverse dependency order
            console.log('Dropping existing tables...');
            await sequelize.query('DROP TABLE IF EXISTS requestItems');
            await sequelize.query('DROP TABLE IF EXISTS requests');
            await sequelize.query('DROP TABLE IF EXISTS employees');
            await sequelize.query('DROP TABLE IF EXISTS refreshTokens');
            await sequelize.query('DROP TABLE IF EXISTS departments');
            await sequelize.query('DROP TABLE IF EXISTS accounts');
            console.log('All tables dropped');

            // Create tables in correct order
            console.log('Creating tables...');
            await sequelize.sync({ 
                force: false, // We already dropped tables manually
                alter: false  // No need to alter since tables are fresh
            });
            console.log('Tables created successfully');

            // Re-enable foreign key checks
            await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
            console.log('Foreign key checks re-enabled');
            console.log('Database synchronized successfully');

        } catch (error) {
            console.error('Error during database initialization:', error);
            // Always try to re-enable foreign key checks
            try {
                await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');
            } catch (fkError) {
                console.error('Error re-enabling foreign key checks:', fkError);
            }
            throw error;
        }
    } catch (error) {
        console.error('Fatal error during database initialization:');
        console.error(error);
        process.exit(1);
    }
}