const adminsSchema = require('../../models/Admins');

//create subadmins
const createsubadmins = async (req, res) => {
  if (req.imageValidationError) {
    return res
      .status(400)
      .send({ success: false, message: 'invaild type only png,jpg,jpeg' });
  }

  //checking the existence of email

  const existing_email = await adminsSchema.findOne({
    email: req.body.email,
  });

  if (existing_email) {
    return res.status(400).send({
      success: false,
      message: 'Email alreday existing',
    });
  }

  //creating new admins data
  try {
    console.log(req.body);
    const salt = await adminsSchema.generateSalt();
    const password = await adminsSchema.hashPassword(req.body.password, salt);
    req.body.salt = salt;

    const admins = new adminsSchema({
      Name: req.body.Name,
      email: req.body.email,
      password: password,
      salt: salt,
      role: req.body.role,
      Designation: req.body.Designation,
      Image: req.file.path,
    });

    await create(adminsSchema, admins);

    return res.send({
      success: true,
      message: 'Created successfully',
      data: req.body.Name,
    });
  } catch (e) {
    return res.json({ success: false, message: e.message });
  }
};

//list subadmins

const listsubadmins = async (req, res) => {
  const page = req.params.p || 0;
  const perPage = req.params.per_page || 10;

  try {
    const requests = await adminsSchema
      .aggregate([
        { $sort: { createdAt: 1 } },
        {
          $project: {
            _id: 0,
            Name: 1,
            phonenumber: 1,
            role: 1,
            email: 1,
            Designation: 1,
            Image: 1,
          },
        },
        {
          $skip: page * perPage,
        },

        {
          $limit: perPage,
        },
      ])
      .exec();

    return res.send({
      success: true,
      message: 'listed successfully',
      data: requests,
    });
  } catch (error) {
    return res.status(500).send({ success: false, error: error.message });
  }
};

//edit subadmins

const editsubadmins = async (req, res) => {
  try {
    const subadmins = adminsSchema.findById(req.params.id);
    if (!subadmins) {
      return res.send({ success: false, message: 'id not found' });
    } else {
      const data = await adminsSchema.findByIdAndUpdate(req.params.id, {
        Name: req.body.Name,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        Designation: req.body.Designation,
        Image: req.file.path,
      });
      if (data) {
        return res.send({
          success: true,
          message: 'edited Succesfully',
          data: data,
        });
      } else
        return res.send({
          success: false,
          message: "Id dosn't exist",
        });
    }
  } catch (err) {
    return res.send({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { createsubadmins, listsubadmins, editsubadmins };
