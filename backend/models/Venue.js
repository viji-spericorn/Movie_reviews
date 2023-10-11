const mongoose = require('mongoose');
const { Schema } = mongoose;

const venueSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    pin: {
      type: Number,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    contact: {
      name: {
        type: String,
        required: true,
      },
      phonenumber: {
        type: String,
        required: true,
      },
    },
    photo: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('venuemanagement', venueSchema);
