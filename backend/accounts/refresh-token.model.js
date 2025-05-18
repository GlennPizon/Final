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
            }
        },
        token: { type: DataTypes.STRING },
        expires: { type: DataTypes.DATE },
        created: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
        createdByIp: { type: DataTypes.STRING },
        revoked: { type: DataTypes.DATE },
        revokedByIp: { type: DataTypes.STRING },
        replacedByToken: { type: DataTypes.STRING },
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
        // disable default timestamp fields (createdAt and updatedAt)
        timestamps: false,
        tableName: 'refreshTokens',
        modelName: 'RefreshToken',
        indexes: [
            {
                name: 'fk_refresh_token_account',
                fields: ['accountId']
            }
        ]
    };

    return sequelize.define('RefreshToken', attributes, options);
}