const Vehicle = require('../models/vehicleModel');

// create customer record
async function createVehicle(id, vehicleDTO) {
    const vehicle = new Vehicle({
        _id: id,
        vehicleId : id, 
        vehicle: vehicleDTO
    })
    try {
        const newVehicle = await vehicle.save()
        return newVehicle
    } catch (err) {
        return { message: err.message }
    }
}

// get all customer
async function getAllVehicles() {
    try {
        const vehicle = await Vehicle.find();
        return vehicle
    } catch (err) {
        return { message: err.message }
    }
}

// get all customer
async function getVehicle(id) {
    let vehicle;
    try {
        vehicle = await Vehicle.findById(id)
        if (vehicle == null) {
            return { message: 'Cannot find vechile' }
        } else {
            return vehicle;
        }
    } catch (err) {
        return { message: err.message }
    }
    return vehicle;
}

module.exports = {
    createVehicle,
    getAllVehicles,
    getVehicle
}