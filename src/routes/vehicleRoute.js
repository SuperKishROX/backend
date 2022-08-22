const express = require('express');
const router = express.Router();
const vechicleController = require('../controllers/vehicleController');

// create a customer
router.post('/', vechicleController.createVehicle);

// create a customer
router.get('/', vechicleController.getAllVehicles);

// create a customer
router.get('/:id', vechicleController.getVehicle);

module.exports = router