require('dotenv').config();
require('rootpath')();
const db = require('_helpers/db');
const bcrypt = require('bcryptjs');

async function checkAdmin() {
    try {
        // Wait for database initialization
        console.log('Waiting for database initialization...');
        await new Promise(resolve => setTimeout(resolve, 2000)); // Give time for DB to initialize

        // Find admin account
        const admin = await db.Account.scope('withHash').findOne({ 
            where: { email: 'admin@cudillo.com' }
        });

        if (!admin) {
            console.log('❌ Admin account not found!');
            return;
        }

        console.log('✅ Admin account exists');
        console.log('ID:', admin.id);
        console.log('Email:', admin.email);
        console.log('Role:', admin.role);
        console.log('Status:', admin.status);
        console.log('IsVerified:', admin.isVerified);
        
        // Test password
        const testPassword = 'Admin@123';
        const passwordMatch = await bcrypt.compare(testPassword, admin.passwordHash);
        console.log('Password matches:', passwordMatch ? '✅' : '❌');

        // Check if account has any refresh tokens
        const refreshTokens = await db.RefreshToken.findAll({
            where: { accountId: admin.id }
        });
        console.log('Number of refresh tokens:', refreshTokens.length);

    } catch (error) {
        console.error('Error:', error);
    }
}

// Run the check
setTimeout(checkAdmin, 1000); // Give time for DB to initialize 