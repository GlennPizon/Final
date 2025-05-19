const bcrypt = require('bcryptjs');
const db = require('../_helpers/db');
const Role = require('../_helpers/role');

async function waitForDbInit() {
    let attempts = 0;
    const maxAttempts = 10;
    
    while (attempts < maxAttempts) {
        if (db.Account) {
            return true;
        }
        console.log('Waiting for database initialization...');
        await new Promise(resolve => setTimeout(resolve, 1000));
        attempts++;
    }
    
    throw new Error('Database initialization timeout');
}

async function updateAdminCredentials() {
    try {
        // Wait for database initialization
        await waitForDbInit();

        // Find admin account (usually ID 1 or role Admin)
        let adminAccount = await db.Account.scope('withHash').findOne({
            where: { role: Role.Admin }
        });

        const newEmail = 'admin@cudillo.com';
        const newPassword = 'Admin@123';
        const passwordHash = await bcrypt.hash(newPassword, 10);

        if (adminAccount) {
            // Update existing admin
            console.log('Updating existing admin account...');
            await adminAccount.update({
                email: newEmail,
                passwordHash: passwordHash,
                verified: new Date()
            });
        } else {
            // Create new admin account
            console.log('Creating new admin account...');
            adminAccount = await db.Account.create({
                email: newEmail,
                passwordHash: passwordHash,
                title: 'Admin',
                firstName: 'System',
                lastName: 'Administrator',
                role: Role.Admin,
                verified: new Date(),
                acceptTerms: true,
                created: new Date()
            });
        }

        console.log('Admin credentials updated successfully!');
        console.log('Email:', newEmail);
        console.log('Password: [as specified]');
        
        process.exit(0);
    } catch (error) {
        console.error('Error updating admin credentials:', error);
        process.exit(1);
    }
}

// Run the update
updateAdminCredentials(); 