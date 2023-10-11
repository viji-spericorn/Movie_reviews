const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

//admins creation for usermanagemnet schema

const adminsSchema = new Schema(
  {
    Name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['superAdmin', 'Admin'],
      required: true,
      default: 'Admin',
    },
    Designation: { type: String, required: false },
    phonenumber: { type: String, required: true },
    Image: { type: String, required: false },
    salt: { type: String, required: false },
    accessToken: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

adminsSchema.static.validatePassword = function (pass) {
  return /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/.test(
    pass
  );
};

adminsSchema.statics.generateSalt = async function () {
  return await bcrypt.genSalt();
};

adminsSchema.statics.hashPassword = async function (pass, salt) {
  return await bcrypt.hash(pass, salt);
};

adminsSchema.statics.verifyPassword = async function (pass, hash, salt) {
  const hashPassword = await bcrypt.hash(pass, salt);
  if (hashPassword == hash) return true;
  else return false;
};

adminsSchema.statics.verifyPassword = async function (pass, hash, salt) {
  const hashPassword = await bcrypt.hash(pass, salt);
  if (hashPassword == hash) return true;
  else return false;
};

adminsSchema.statics.generateAuthToken = function (data) {
  let expiresIn = expireIn(10);

  if (data.remeberMe) {
    console.log('entered......');
    expiresIn = expireIn(720);
  }

  return jwt.sign(
    {
      id: data._id,
      email: data.email,
      validity: data.password.concat(data._id).concat(data.email),
    },
    process.env.JWT_SECRET,
    { expiresIn }
  );
};

const expireIn = (numDays) => {
  const dateobj = new Date();
  return dateobj.setMinutes(dateobj.getMinutes() + numDays);
};

module.exports = mongoose.model('Usermanagement', adminsSchema);
