const Joi = require('joi');

//validation for signup schema

const authValidationSchema = async (req, res, next) => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  const adminsSchema = Joi.object({
    Name: Joi.string().min(6).max(20).required().messages({
      'string.base': 'name should be a string',
      'string.empty': 'name is required min of 6',
      'string.min': 'name should have a minimum length of {#limit}',
      'string.max': 'name should have a maximum length of {#limit}',
      'any.required': 'name is required',
    }),
    email: Joi.string().email().required().messages({
      'string.base': 'Email should be a string',
      'string.empty': 'Email is required',
      'string.email': 'Please enter a valid email address',
      'any.required': 'Email is required',
    }),
    password: Joi.string().min(8).required().regex(passwordRegex).messages({
      'string.base': 'Password should be a string',
      'string.empty': 'Password is required',
      'string.min': 'Password should have a minimum length of {#limit}',
      'string.pattern.base':
        'Password should contain at least 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special character (!@#$%^&*)',
      'any.required': 'Password is required',
    }),
    salt: Joi.string(),
    accessToken: Joi.string(),
  });

  try {
    req.body = await adminsSchema.validateAsync(req.body);
    return next();
  } catch (err) {
    return res.json({ success: false, err: err.message });
  }
};

module.exports = { authValidationSchema };
