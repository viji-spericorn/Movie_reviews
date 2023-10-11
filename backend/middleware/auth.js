const Users = require('../models/Admins');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    if (req.originalUrl.startsWith('/auth')) return next();
    const token = req.header('Authorization')
      ? req.header('Authorization').split(' ')[1]
      : null;
    console.log(token);
    if (!token) {
      return res.json({
        success: false,
        message: 'unauthorized access',
      });
    }

    const access_Token = await Users.findOne({ where: { accessToken: token } });
    if (!access_Token) {
      return res.json({
        success: false,
        msg: 'Invalid or Expired Tocken',
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('decoded-------->\n', decoded);
    if (!decoded) {
      return res.json({
        success: false,
        message: 'invalid token',
      });
    }
    if (token.exp < Date.now()) {
      return res.json({
        success: false,
        message: 'Token expired',
      });
    }

    const isUserExists = await Users.findById(decoded.id);
    if (!isUserExists) {
      return res.json({
        success: false,
        message: 'Access Denied',
      });
    }

    let matchvalidity = isUserExists.password
      .concat(isUserExists.id)
      .concat(isUserExists.email);
    if (matchvalidity != decoded.validity) {
      return res.json({
        success: false,
        message: 'Access Denied',
      });
    }

    req.user = decoded;
    return next();
  } catch (ex) {
    console.log(ex);
    return res.json({
      success: false,
      message: 'Invalid Token',
    });
  }
};
