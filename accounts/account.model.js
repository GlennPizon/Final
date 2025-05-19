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
        email: { 
            type: DataTypes.STRING, 
            allowNull: false,
            unique: true 
        },
        passwordHash: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        title: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        firstName: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        lastName: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        acceptTerms: { 
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        role: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        isSuperAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        verificationToken: { 
            type: DataTypes.STRING,
            allowNull: true
        },
        verified: { 
            type: DataTypes.DATE,
            allowNull: true
        },
        resetToken: { 
            type: DataTypes.STRING,
            allowNull: true
        },
        resetTokenExpires: { 
            type: DataTypes.DATE,
            allowNull: true
        },
        passwordReset: { 
            type: DataTypes.DATE,
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
        },
        isVerified: {
            type: DataTypes.VIRTUAL,
            get() { 
                // For admin account or super admin, always return true
                if (this.role === 'Admin' || this.isSuperAdmin) return true;
                // For others, check verification
                return !!(this.verified || this.passwordReset); 
            }
        },
        permissions: {
            type: DataTypes.VIRTUAL,
            get() {
                const basePermissions = {
                    canViewUsers: false,
                    canManageUsers: false,
                    canViewDepartments: false,
                    canManageDepartments: false,
                    canViewRequests: false,
                    canManageRequests: false,
                    canAccessAdminPanel: false,
                    canManageSystem: false,
                    canViewAuditLogs: false
                };

                if (this.role === 'Admin' || this.isSuperAdmin) {
                    return Object.keys(basePermissions).reduce((acc, key) => {
                        acc[key] = true;
                        return acc;
                    }, {});
                }

                return basePermissions;
            }
        }
    };

    const options = {
        timestamps: false,
        defaultScope: {
            // By default, exclude the password hash
            attributes: { 
                exclude: ['passwordHash'] 
            }
        },
        scopes: {
            // When using withHash scope, include all attributes
            withHash: { 
                attributes: {
                    include: ['passwordHash']
                }
            }
        },
        tableName: 'accounts',
        modelName: 'Account',
        indexes: [
            {
                name: 'email_unique',
                unique: true,
                fields: ['email']
            }
        ]
    };

    return sequelize.define('Account', attributes, options);
}