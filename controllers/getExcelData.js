const getExcelData = require('../service/getExcelData');

exports.GetData = async (req, res, next) => {
    try {               
        let response = await getExcelData.GetData(req, res);
        // res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error});
    }
};

exports.GetAllDataByFileName = async (req, res, next) => {
    try {               
        let response = await getExcelData.GetAllDataByFileName(req, res);;
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error});
    }
};

exports.GetAllData = async (req, res, next) => {
    try {               
        let response = await getExcelData.GetAllData(req, res);;
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error});
    }
};

exports.FilterData = async (req, res, next) => {
    try {               
        let response = await getExcelData.FilterData(req, res);
        // res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error});
    }
};

exports.GetById = async (req, res, next) => {
    try {               
        let response = await getExcelData.GetById(req, res);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error});
    }
};

exports.UpdateEntity = async (req, res, next) => {
    try {               
        let response = await getExcelData.UpdateEntity(req, res);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({error: error});
    }
};