exports.auth = async (req, res, next) => {
  return res.status(200).json({
    message: "Hello from Auth !!",
  });
};
