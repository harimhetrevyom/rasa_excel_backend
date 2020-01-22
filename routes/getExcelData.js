"use strict";
const express = require("express"),
  router = new express.Router();
const getExcelData = require("../controllers/getExcelData");

router.route("/getData").post(getExcelData.GetData);
router.route("/getAllData").get(getExcelData.GetAllData)
router.route("/filterData").post(getExcelData.FilterData)
router.route('/getRecordById').post(getExcelData.GetById)
router.route('/updateEntity').post(getExcelData.UpdateEntity)
router.route('/getAllDataByFileName').post(getExcelData.GetAllDataByFileName)

module.exports = router;