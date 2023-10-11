const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const { connect, connection } = mongoose;

connect(process.env.DATABASE_URL);

connection.on('connected', () =>
  console.log('Database connected successfully')
);
connection.on('error', (error) => console.log('something went wrong', error));

module.exports = connection;
