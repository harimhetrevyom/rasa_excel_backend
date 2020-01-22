const deleteModel = require('../models/uploadExcel')

module.exports = {
    DeleteData: async (req, res)  => {
     const objects = req.body.deleteIDs
        try {
          return deleteModel.deleteMany({_id: {$in: objects}}).then(async result => {
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
      },
}