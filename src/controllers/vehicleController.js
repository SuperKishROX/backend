const vechicleService = require('../services/vehicleService');

// create a customer
async function createVehicle(req, res, next) {
    try {
        const vehicleDTO = req.body;
        res.json(await vechicleService.createVehicle(vehicleDTO.VehicleId, vehicleDTO));
    } catch (err) {
        console.error(`Error while creating vechile record`, err.message);
        next(err);
    }
}

// create a customer
async function getAllVehicles(req, res, next) {
    try {
        res.json(await vechicleService.getAllVehicles);
    } catch (err) {
        console.error(`Error while getting vehicle records`, err.message);
        next(err);
    }
}

// create a customer
async function getVehicle(req, res, next) {
    try {
        res.json(await vechicleService.getVehicle(req.params.id));
    } catch (err) {
        console.error(`Error while getting vehicle`, err.message);
        next(err);
    }
}

module.exports = {
    createVehicle,
    getAllVehicles,
    getVehicle
}
