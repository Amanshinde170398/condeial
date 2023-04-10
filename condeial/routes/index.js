const express = require("express");
const router = express.Router();

const homeController = require("../controllers/home_controller");

// Adding root routes
router.get("/", homeController.home);
router.get("/about", homeController.about);

// Adding route for users
router.use("/users", require("./users"));

module.exports = router;
