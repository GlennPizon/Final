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
        accountId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'accounts',
                key: 'id'
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        },
        token: { 
            type: DataTypes.STRING(255),
            allowNull: false 
        },
        expires: { 
            type: DataTypes.DATE,
            allowNull: false 
        },
        created: { 
            type: DataTypes.DATE, 
            allowNull: false, 
            defaultValue: DataTypes.NOW 
        },
        createdByIp: { 
            type: DataTypes.STRING,
            allowNull: true 
        },
        revoked: { 
            type: DataTypes.DATE,
            allowNull: true 
        },
        revokedByIp: { 
            type: DataTypes.STRING,
            allowNull: true 
        },
        replacedByToken: { 
            type: DataTypes.STRING(255),
            allowNull: true 
        },
        isExpired: {
            type: DataTypes.VIRTUAL,
            get() { return Date.now() >= this.expires; }
        },
        isActive: {
            type: DataTypes.VIRTUAL,
            get() { return !this.revoked && !this.isExpired; }
        }
    };

    const options = {
        tableName: 'refreshTokens',
        modelName: 'RefreshToken',
        timestamps: false,
        indexes: [
            {
                name: 'fk_refresh_token_account',
                fields: ['accountId'],
                using: 'BTREE'
            },
            {
                name: 'idx_token',
                fields: ['token'],
                unique: true,
                using: 'BTREE'
            }
        ]
    };

    return sequelize.define('RefreshToken', attributes, options);
}