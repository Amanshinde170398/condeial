module.exports.home = function (req, res) {
  return res.render("dashboard/home", { title: "Home" });
};

module.exports.about = function (req, res) {
  return res.end("<h1>About Express</h1>");
};
