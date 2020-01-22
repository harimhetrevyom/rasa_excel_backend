const Xlsx = require("xlsx");
const path = require("path");
var fs = require("fs");
var ExcelSchema = require("../models/uploadExcel");

module.exports = {
  uploadFile: async (req, res, next) => {
    try {
      const file = req.file;
      if (!file) {
        const error = new Error("Please upload a file");
        error.httpStatusCode = 400;
        return next(error);
      }
      const excelFile = Xlsx.readFile(
        path.join(__dirname, `../excelFiles/${file.filename}`)
      );
      let allData = Xlsx.utils.sheet_to_json(excelFile.Sheets.Main, {
        raw: true
      });
      let a = []
     await allData.forEach(element => {
        let dummyObject = {
          Description: element.Description,
          FileName: file.originalname
        }
        a.push(dummyObject)
      })
      a = JSON.parse(JSON.stringify(a).replace(/\s(?=\w+":)/g, ""));
      try {
       return ExcelSchema.insertMany(a, {ordered: false}).then(async result => {
          if (result) {
            return {
              status: 200,
              message: "Success"
            }
          }
        });
      } catch (error) {
        return {
          status: 500,
          message: "failed," + error
        };
      }

      try {
        fs.unlinkSync(path.join(__dirname, `../excelFiles/${file.filename}`));
      } catch (e) {
        return {
          message: "failed to delete" + e
        };
      }
    } catch (error) {
      throw new Error(error);
    }
  }
};
