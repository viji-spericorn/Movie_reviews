const venueSchema = require('../../models/Venue');

const createvenue = async (req, res) => {
  if (req.imageValidationError) {
    return res
      .status(400)
      .send({ success: false, message: 'invaild type only png,jpg,jpeg' });
  }

  //checking the existence of email

  const existing_name = await venueSchema.findOne({
    name: req.body.name,
  });

  if (existing_name) {
    return res.status(400).send({
      success: false,
      message: 'Event already added',
    });
  }

  //creating new admins data
  try {
    console.log(req.body);
    const contact = {
      contactname: req.body.contactname,
      contactnumber: req.body.contactnumber,
    };

    const venues = new venueSchema({
      name: req.body.name,
      address: req.body.address,
      pin: req.body.pin,
      city: req.body.city,
      state: req.body.state,
      country: req.body.country,
      contact: contact,
      photo: req.file.path,
    });

    await create(venueSchema, venues);

    return res.send({
      success: true,
      message: 'uploaded successfully',
      data: venues,
    });
  } catch (e) {
    return res.send({ success: false, message: e.message });
  }
};

//list all venues

const listvenues = async (req, res) => {
  const page = req.params.p || 0;
  const perPage = req.params.per_page || 10;

  try {
    const requests = await venueSchema
      .aggregate([
        { $sort: { createdAt: 1 } },
        {
          $project: {
            _id: 0,
            name: 1,
            address: 1,
            city: 1,
            photo: 1,
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

//edit venues

const editvenues = async (req, res) => {
  try {
    const venues = venueSchema.findById(req.params.id);
    if (!venues) {
      return res.send({ success: false, message: 'id not found' });
    } else {
      const data = await venueSchema.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        address: req.body.address,
        pin: req.body.pin,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        contact: {
          contactname: req.body.contactname,
          contactnumber: req.body.contactnumber,
        },
        photo: req.file.path,
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

//view venues

const viewvenues = (req, res) => {
  venueSchema.findById(req.params.id, (err, data) => {
    if (err) {
      return res.send({ success: false, message: 'data not found' });
    } else {
      return res.send({
        success: true,
        message: 'view data successfully',
        data,
      });
    }
  });
};

module.exports = {
  createvenue,
  listvenues,
  editvenues,
  viewvenues,
};
