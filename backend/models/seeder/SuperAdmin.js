const mongoose = require('mongoose');
const adminsSchema = require('../Admins');
require('dotenv').config();

// Define the data to be inserted
const superAdmin = {
  Name: 'superAdmin',
  email: 'admin123@gmail.com',
  password: 'admin123',
  role: 'superAdmin',
  phonenumber: '9961035648',
};

mongoose.set('strictQuery', false);

(async () => {
  try {
    // Connect to the database
    await mongoose.connect(
      'mongodb+srv://vijikumari:viji12345@viji.7gx2bcw.mongodb.net/event-management',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Connected to database');

    // Check if the superAdmin already exists
    const existingAdmin = await adminsSchema.findOne({
      email: superAdmin.email,
    });
    if (existingAdmin) {
      console.log('SuperAdmin already exists in database');
      return;
    }

    // Create the superAdmin
    const salt = await adminsSchema.generateSalt();
    const hashedPassword = await adminsSchema.hashPassword(
      superAdmin.password,
      salt
    );
    const createdAdmin = await adminsSchema.create({
      ...superAdmin,
      salt,
      password: hashedPassword,
    });
    console.log('SuperAdmin created successfully');

    // Close the connection
    await mongoose.connection.close();
    console.log('Connection closed successfully');
  } catch (error) {
    console.error('Error while creating superAdmin:', error);
    process.exit(1);
  }
})();
