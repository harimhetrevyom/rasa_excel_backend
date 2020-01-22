const userService = require('../service/user.service');

exports.Register = async (req, res, next) => {
    try {               
        let response = await userService.Register(req, res);;
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error});
    }
};

exports.Login = async (req, res, next) => {
    try {               
        let response = await userService.Login(req, res);;
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error});
    }
};