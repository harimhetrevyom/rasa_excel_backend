const userModel = require("../models/user.model");

module.exports = {
  Register: async (req, res) => {
    let user = new userModel({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });
    try {
      return await user.save().then(result => {
        if (result) {
          return {
            status: 200,
            message: "User Registered Successfully"
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
  Login: async (req, res) => {
    try {
      return await userModel
        .findOne({ email: req.body.email })
        .then(async result => {
          if (result.password !== req.body.password) {
            return {
              status: 401,
              message: "Email or Password is incorrect"
            };
          } else {
            return {
              data: result,
              status: 200,
              message: "User Authenticated"
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
};
