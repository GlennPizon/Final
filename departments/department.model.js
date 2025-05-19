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
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
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
        tableName: 'departments',
        modelName: 'Department',
        timestamps: false,
        indexes: [
            {
                name: 'name_unique',
                unique: true,
                fields: ['name']
            }
        ]
    };

    return sequelize.define('Department', attributes, options);
}