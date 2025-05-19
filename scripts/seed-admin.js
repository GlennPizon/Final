const bcrypt = require('bcryptjs');
const Role = require('../_helpers/role');
const Status = require('../_helpers/status');

async function seedAdmin(db) {
    try {
        console.log('Starting admin account seeding...');
        
        if (!db || !db.Account) {
            throw new Error('Database connection not initialized properly');
        }

        // Wait for tables to be ready
        let retries = 0;
        const maxRetries = 5;
        
        while (retries < maxRetries) {
            try {
                // Check if admin already exists
                console.log('Checking for existing admin account...');
                const existingAdmin = await db.Account.scope('withHash').findOne({
                    where: { role: Role.Admin }
                });

                if (existingAdmin) {
                    console.log('Admin account already exists, skipping seed.');
                    console.log('Admin Details:', {
                        email: existingAdmin.email,
                        role: existingAdmin.role,
                        isSuperAdmin: existingAdmin.isSuperAdmin,
                        isVerified: existingAdmin.isVerified,
                        permissions: existingAdmin.permissions
                    });
                    return existingAdmin;
                }

                // Hash password
                const password = 'Admin@123';
                console.log('Hashing password for admin account...');
                const passwordHash = await bcrypt.hash(password, 10);
                console.log('Password hashed successfully');

                // Create admin account
                console.log('Creating admin account...');
                const adminAccount = await db.Account.create({
                    email: 'admin@cudillo.com',
                    passwordHash: passwordHash,
                    title: 'Admin',
                    firstName: 'System',
                    lastName: 'Administrator',
                    role: Role.Admin,
                    isSuperAdmin: true,
                    verified: new Date(),
                    acceptTerms: true,
                    created: new Date(),
                    status: Status.Active
                });

                if (!adminAccount) {
                    throw new Error('Failed to create admin account');
                }

                // Verify the admin account was created correctly
                const verifyAdmin = await db.Account.scope('withHash').findByPk(adminAccount.id);
                if (!verifyAdmin || !verifyAdmin.passwordHash) {
                    throw new Error('Admin account verification failed');
                }

                // Create an employee record for the admin
                const employeeRecord = await db.Employee.create({
                    employeeId: 'ADMIN-001',
                    userId: adminAccount.id,
                    position: 'System Administrator',
                    hireDate: new Date(),
                    status: Status.Active,
                    departmentId: null // Admin is not tied to any specific department
                });

                console.log('Admin account seeded successfully!');
                console.log('Admin Account Details:', {
                    id: adminAccount.id,
                    email: adminAccount.email,
                    role: adminAccount.role,
                    isSuperAdmin: adminAccount.isSuperAdmin,
                    isVerified: adminAccount.isVerified,
                    permissions: adminAccount.permissions
                });
                console.log('Employee Record Created:', {
                    employeeId: employeeRecord.employeeId,
                    position: employeeRecord.position,
                    status: employeeRecord.status
                });
                
                return adminAccount;
            } catch (error) {
                if (error.name === 'SequelizeDatabaseError' && error.parent?.code === 'ER_NO_SUCH_TABLE') {
                    retries++;
                    if (retries === maxRetries) {
                        throw new Error('Tables not ready after maximum retries');
                    }
                    console.log(`Tables not ready yet, retrying in 2 seconds (attempt ${retries}/${maxRetries})...`);
                    await new Promise(resolve => setTimeout(resolve, 2000));
                    continue;
                }
                throw error;
            }
        }
    } catch (error) {
        console.error('Error seeding admin account:', error);
        throw error;
    }
}

module.exports = seedAdmin; 