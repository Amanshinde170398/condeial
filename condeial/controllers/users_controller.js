module.exports.profile = function (req, res) {
  return res.end("<h1>User Profile</h1>");
};

module.exports.details = function (req, res) {
  return res.end("<h1>User Details</h1>");
};
