const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// create a customer
router.post('/', customerController.createCustomer);

// create a customer
router.get('/', customerController.getAllCustomers);

// create a customer
router.get('/:id', customerController.getCustomer);

module.exports = router