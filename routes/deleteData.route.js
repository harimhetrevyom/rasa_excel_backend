"use strict";
const express = require("express"),
  router = new express.Router();
const deleteDataController = require("../controllers/deleData.controller");

router.route("/delete").post(deleteDataController.DeleteData);

module.exports = router;