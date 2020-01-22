const getDataModel = require("../models/uploadExcel");
const mongoose = require('mongoose');

module.exports = {
  // GetData: async (req, res) => {
  //   let response;
  //   var pageNo = req.body.pageNo;
  //   var size = req.body.size
  //   var query = {}
  //   var filetrQuery = {}
  //   if(pageNo < 0 || pageNo === 0){
  //     response =  {
  //       "error": true,
  //       "message": "Invalid Page number",
  //     }
  //   }
  //   if(req.body.Category1){
  //     filterQuery.Category1 = {"$in": req.body.Category1}
  //   }
  //   if(req.body.Category2){
  //     filterQuery.Category2 = {"$in": req.body.Category2}
  //   }
  //   if(req.body.Category3){
  //     filterQuery.Category3 = {"$in": req.body.Category3}
  //   }
  //   query.skip = size*(pageNo - 1);
  //   query.limit = size;
  //     try {
  //       getDataModel.count(filetrQuery,function(err,totalCount) {
  //         if(err) {
  //            response = {"error" : true,"message" : "Error fetching data"}
  //         }else {
  //           return getDataModel.find(filetrQuery,{},query,function(err,data) {
  //              if(err) {
  //                  response = {"error" : true,"message" : "Error fetching data"};
  //              } else {
  //                  var totalPages = Math.ceil(totalCount / size)
  //                   response = {error : false, pages:totalPages, totalCount: totalCount, data : data,};
  //              }
  //              res.send(response)
  //           });
  //         }

  //   })
  //     } catch (error) {
  //       return {
  //         status: 500,
  //         message: "failed," + error
  //       };
  //     }
  //   },

  GetAllData: async => {
    try {
      return getDataModel.find().then(async result => {
        if (result) {
          return {
            data: result,
            status: 200,
            message: "success"
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

  GetAllDataByFileName: async (req, res) => {
    var filterQuery = {};
    if (req.body.FileName) {
      filterQuery.FileName = { $in: req.body.FileName };
    }
    console.log("FiletreqsaDAdADR", filterQuery);
    
    try {
      return getDataModel.find(filterQuery, {}).then(async result => {
        if (result) {
          return {
            data: result,
            status: 200,
            message: "success"
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

  GetById: async (req, res) => {
    try {
      return getDataModel.findById({ _id: req.body.id }).then(async result => {
        if (result) {
          return {
            data: result,
            status: 200,
            message: "success"
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

  UpdateEntity: async (req, res) => {
    console.log("req", req.body.Entity);
    
    try {
      return getDataModel
        .findByIdAndUpdate(
          { _id: mongoose.Types.ObjectId(req.body.id) },
          {
            $set: {
              Entity: [...req.body.Entity]
            }
          }
        )
        .then(async result => {
          if (result) {
            return {
              data: result,
              status: 200,
              message: "success"
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

  GetData: async (req, res) => {
    let response;
    var pageNo = req.body.pageNo;
    var size = req.body.size;
    var query = {};
    var filterQuery = {};
    if (pageNo < 0 || pageNo === 0) {
      response = {
        error: true,
        message: "Invalid Page number"
      };
    }
      console.log("REQ", req.body.FileName);
      
    if (req.body.Category1) {

      filterQuery.Category1 = { $in: req.body.Category1 };
    }
    if (req.body.Category2) {
      filterQuery.Category2 = { $in: req.body.Category2 };
    }
    if (req.body.Category3) {
      filterQuery.Category3 = { $in: req.body.Category3 };
    }
    if (req.body.IncidentORRequest) {
      filterQuery.IncidentORRequest = { $in: req.body.IncidentORRequest };
    }
    if (req.body.FileName) {
      filterQuery.FileName = { $in: req.body.FileName };
    }
    if (req.body.Confidence1) {
      filterQuery.Confidence1 = {
        $gte: req.body.Confidence1.gt,
        $lt: req.body.Confidence1.lt
      };
    }
    if (req.body.Confidence2) {
      filterQuery.Confidence2 = {
        $gte: req.body.Confidence2.gt,
        $lt: req.body.Confidence2.lt
      };
    }
    if (req.body.Confidence3) {
      filterQuery.Confidence3 = {
        $gte: req.body.Confidence3.gt,
        $lt: req.body.Confidence3.lt
      };
    }
    if (req.body.Confidence4) {
      filterQuery.Confidence4 = {
        $gte: req.body.Confidence4.gt,
        $lt: req.body.Confidence4.lt
      };
    }
    query.skip = size * (pageNo - 1);
    query.limit = size;
    console.log("filetrArray", filterQuery);
    
    try {
      getDataModel.count(filterQuery, function(err, totalCount) {
        if (err) {
          response = { error: true, message: "Error fetching data" };
        } else {
          return getDataModel.find(filterQuery, {}, query, function(err, data) {
            if (err) {
              response = { error: true, message: "Error fetching data" };
            } else {
              var totalPages = Math.ceil(totalCount / size);
              response = {
                error: false,
                pages: totalPages,
                totalCount: totalCount,
                data: data
              };
            }
            res.send(response);
          });
        }
      });
    } catch (error) {
      return {
        status: 500,
        message: "failed," + error
      };
    }
  }
};
