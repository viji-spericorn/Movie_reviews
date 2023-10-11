exports.successMessage = (res, message) => {
  return res.send({
    success: true,
    message,
  });
};

exports.errorMessage = (res, message) => {
  return res.send({
    success: false,
    message,
  });
};
