const adminsSchema = require('../../models/Admins');
const designationSchema = require('../../models/Designations');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const admin = await adminsSchema.findOne({ email });
    const des = await designationSchema.find({});
    console.log(des);
    console.log(admin);
    if (!admin) {
      return res.send({
        success: false,
        message: 'invalid email or password',
      });
    }
    if (
      !(await adminsSchema.verifyPassword(password, admin.password, admin.salt))
    ) {
      return res.send({
        success: false,
        message: 'Invalid email or password',
      });
    }
    const accessToken = adminsSchema.generateAuthToken(admin);
    const refreshToken = adminsSchema.generateAuthToken(admin);

    admin.accessToken = accessToken;
    const newLogin = new adminsSchema(admin);
    let newData = await newLogin.save();

    if (admin.role === 'superAdmin') {
      return res.send({
        success: true,
        message: 'Logined in Successfully',
        data: {
          role: admin.role,
          Designation: des,
          accessToken,
          refreshToken,
        },
      });
    } else
      return res.send({
        success: true,
        message: 'Logined in Successfully',
        data: {
          role: admin.role,
          accessToken,
          refreshToken,
        },
      });
  } catch (e) {
    console.log('error', e);
    return res.send({
      success: false,
      message: e.message,
    });
  }
};
