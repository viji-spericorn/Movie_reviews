const mongoose = require('mongoose');
const designationSchema = require('../Designations');
require('dotenv').config();

// Define the data to be inserted
const Designations = [
  { Designation: 'Accountant' },
  { Designation: 'Business Developer' },
  { Designation: 'Marketing Manager' },
];

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

    const existing = await designationSchema.findOne({
      Designation: Designations.Designation,
    });
    if (existing) {
      console.log(' already exists in database');
      return;
    }

    const created = await designationSchema.create(Designations);
    console.log(' created successfully');

    // Close the connection
    await mongoose.connection.close();
    console.log('Connection closed successfully');
  } catch (error) {
    console.error('Error while creating Designation:', error);
    process.exit(1);
  }
})();
