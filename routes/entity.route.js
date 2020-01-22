"use strict";
const express = require("express"),
  router = new express.Router();
const entityController = require("../controllers/entity.controller");

router.route("/addEntity").post(entityController.AddEntity)
// router.route("/login").post(userController.Login)

module.exports = router;