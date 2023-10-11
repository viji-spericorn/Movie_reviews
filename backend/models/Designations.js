const mongoose = require('mongoose');
const { Schema } = mongoose;
require('dotenv').config();

const designationSchema = new Schema(
  {
    Designation: {
      type: String,
      required: false,
    },
    permissions: [
      {
        type: String,
        required: false,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Designation', designationSchema);
