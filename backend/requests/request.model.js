const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        employeeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'employees',
                key: 'id'
            }
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Pending'
        },
        created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        updated: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    };

    const options = {
        tableName: 'requests',
        modelName: 'Request',
        timestamps: false,
        defaultScope: {
            attributes: { exclude: [] }
        },
        scopes: {
            // include hash with this scope
            withHash: { attributes: {}, }
        }
    };

    return sequelize.define('Request', attributes, options);
}