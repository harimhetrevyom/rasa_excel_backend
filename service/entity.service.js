const entityModel = require("../models/entity.model");

module.exports = {
    AddEntity: async (req, res) => {
    let entity = new entityModel({
        EntityName: req.body.EntityName,
        EntityValue: req.body.EntityValue,
        Start: req.body.Start,
        End: req.body.End
    });
    try {
      return await entity.save().then(result => {
        if (result) {
          return {
            status: 200,
            message: "Success"
          };
        }
      });
    } catch (error) {
      return {
        status: 500,
        message: "failed," + error
      };
    }
  }
}