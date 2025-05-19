const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        employeeId: {
            type: DataTypes.STRING(255),
            unique: true,
            allowNull: false
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'accounts',
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        departmentId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'departments',
                key: 'id'
            },
            onDelete: 'SET NULL',
            onUpdate: 'CASCADE'
        },
        position: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        hireDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        status: {
            type: DataTypes.ENUM('Active', 'Inactive'),
            allowNull: false,
            defaultValue: 'Active'
        },
        created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updated: {
            type: DataTypes.DATE,
            allowNull: true
        }
    };

    const options = {
        tableName: 'employees',
        modelName: 'Employee',
        timestamps: false,
        indexes: [
            {
                name: 'employeeId_unique',
                unique: true,
                fields: ['employeeId']
            },
            {
                name: 'fk_employee_account',
                fields: ['userId'],
                using: 'BTREE'
            },
            {
                name: 'fk_employee_department',
                fields: ['departmentId'],
                using: 'BTREE'
            }
        ]
    };

    return sequelize.define('Employee', attributes, options);
}