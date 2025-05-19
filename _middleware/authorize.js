const { expressjwt: jwt } = require('express-jwt');
const { secret } = require('config.json');
const db = require('_helpers/db');

module.exports = authorize;

function authorize(roles = []) {
    // roles param can be a single role string (e.g. Role.User or 'User') 
    // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
    if (typeof roles === 'string') {
        roles = [roles];
    }

    console.log('Authorizing roles:', roles);

    return [
        // authenticate JWT token and attach user to request object (req.user)
        jwt({ secret, algorithms: ['HS256'] }),

        // authorize based on user role
        async (req, res, next) => {
            try {
                console.log('JWT decoded user:', req.user);
                const account = await db.Account.findByPk(req.user.id);
                console.log('Found account:', account ? {
                    id: account.id,
                    email: account.email,
                    role: account.role,
                    isVerified: account.isVerified
                } : 'null');
                
                if (!account || (roles.length && !roles.includes(account.role))) {
                    console.log('Authorization failed:', {
                        accountExists: !!account,
                        requiredRoles: roles,
                        userRole: account?.role
                    });
                    // account no longer exists or role not authorized
                    return res.status(401).json({ message: 'Unauthorized' });
                }

                // Check if user is verified (admins are auto-verified)
                if (!account.isVerified) {
                    console.log('Account not verified:', account.email);
                    return res.status(401).json({ message: 'Account not verified' });
                }

                // Add user and permissions to request
                req.user = {
                    ...req.user,
                    role: account.role,
                    isSuperAdmin: account.isSuperAdmin,
                    permissions: account.permissions
                };

                console.log('Authorization successful:', {
                    role: account.role,
                    isSuperAdmin: account.isSuperAdmin,
                    path: req.path
                });

                // Admin or super admin bypass role checks
                if (account.role === 'Admin' || account.isSuperAdmin) {
                    return next();
                }

                // Check specific permissions if needed
                if (req.method === 'GET') {
                    // Read operations
                    if (req.path.includes('/users') && !account.permissions.canViewUsers) {
                        return res.status(403).json({ message: 'Forbidden - Insufficient permissions' });
                    }
                    if (req.path.includes('/departments') && !account.permissions.canViewDepartments) {
                        return res.status(403).json({ message: 'Forbidden - Insufficient permissions' });
                    }
                    if (req.path.includes('/requests') && !account.permissions.canViewRequests) {
                        return res.status(403).json({ message: 'Forbidden - Insufficient permissions' });
                    }
                } else {
                    // Write operations
                    if (req.path.includes('/users') && !account.permissions.canManageUsers) {
                        return res.status(403).json({ message: 'Forbidden - Insufficient permissions' });
                    }
                    if (req.path.includes('/departments') && !account.permissions.canManageDepartments) {
                        return res.status(403).json({ message: 'Forbidden - Insufficient permissions' });
                    }
                    if (req.path.includes('/requests') && !account.permissions.canManageRequests) {
                        return res.status(403).json({ message: 'Forbidden - Insufficient permissions' });
                    }
                }

                next();
            } catch (error) {
                console.error('Authorization error:', error);
                return res.status(500).json({ message: 'Internal server error during authorization' });
            }
        }
    ];
}