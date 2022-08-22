const customerService = require('../services/customerService');

// create a customer
async function createCustomer(req, res, next) {
    try {
        const customerDTO = req.body;
        res.json(await customerService.createCustomer(customerDTO));
    } catch (err) {
        console.error(`Error while creating customer record`, err.message);
        next(err);
    }
}

// create a customer
async function getAllCustomers(req, res, next) {
    try {
        res.json(await customerService.getAllCustomers());
    } catch (err) {
        console.error(`Error while getting customer records`, err.message);
        next(err);
    }
}

// create a customer
async function getCustomer(req, res, next) {
    try {
        res.json(await customerService.getCustomer(req.params.id));
    } catch (err) {
        console.error(`Error while getting customer`, err.message);
        next(err);
    }
}

module.exports = {
    createCustomer,
    getAllCustomers,
    getCustomer
}
