"use strict";
const express = require("express"),
  router = new express.Router();
const userController = require("../controllers/user.controller");

router.route("/register").post(userController.Register)
router.route("/login").post(userController.Login)

module.exports = router;