const deleteDataService = require('../service/deleteData.service');

exports.DeleteData = async (req, res, next) => {
    try {               
        let response = await deleteDataService.DeleteData(req, res);;
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error});
    }
};