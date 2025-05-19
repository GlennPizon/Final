module.exports = {
    Admin: 'Admin',
    User: 'User',
    Employee: 'Employee',
    Manager: 'Manager',
    
    // Helper functions
    isAdmin: (role) => role === 'Admin',
    isEmployee: (role) => role === 'Employee',
    isManager: (role) => role === 'Manager',
    isUser: (role) => role === 'User',
    
    // Get role hierarchy (higher index = more privileges)
    getRoleLevel: (role) => {
        const roles = ['User', 'Employee', 'Manager', 'Admin'];
        return roles.indexOf(role);
    },
    
    // Check if role has sufficient privileges
    hasMinimumRole: (userRole, requiredRole) => {
        const roles = ['User', 'Employee', 'Manager', 'Admin'];
        const userLevel = roles.indexOf(userRole);
        const requiredLevel = roles.indexOf(requiredRole);
        return userLevel >= requiredLevel;
    }
};