const entityService = require('../service/entity.service');

exports.AddEntity = async (req, res, next) => {
    try {               
        let response = await entityService.AddEntity(req, res);;
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error});
    }
};