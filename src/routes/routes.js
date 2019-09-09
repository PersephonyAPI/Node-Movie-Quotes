const express = require("express");
const MainController = require("../controllers/main_controller");
const PhoneController = require("../controllers/phone_controller");

const routes = express.Router();

routes.post("/sms", (req, res) => MainController.inboundMessage(req, res));

routes.post("/voice", (req, res) => PhoneController.phoneCall(req, res));

module.exports = routes;
