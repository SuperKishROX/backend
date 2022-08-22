const Customer = require('../models/customerModel');
const dateUtil = require('../utils/dateFormatter');

// create customer record
async function createCustomer(customerDTO) {
    console.log(customerDTO);
    const customer = new Customer({
        _id: customerDTO.membershipId,
        membershipId: customerDTO.membershipId,
        givenName: customerDTO.givenName,
        lastName: customerDTO.lastName,
        phone: customerDTO.phone,
        emailAddress: customerDTO.emailAddress,
        address: customerDTO.address,
        dob: customerDTO.dob,
        nonPolicyFirstName: customerDTO.nonPolicyFirstName,
        nonPolicyLastName:  customerDTO.nonPolicyLastName,
        nonPolicyPhone:  customerDTO.nonPolicyPhone,
        nonPolicyDoB: customerDTO.nonPolicyDoB,
        driverPermission:  customerDTO.driverPermission,
        nonDriverHasInsurance:  customerDTO.nonDriverHasInsurance,
        lastRider:  customerDTO.lastRider,
        driverRelation:  customerDTO.driverRelation
    })
    try {
        const newCustomer = await customer.save()
        return newCustomer
    } catch (err) {
        return { message: err.message }
    }
}

// get all customer
async function getAllCustomers() {
    try {
        const customers = await Customer.find();
        return customers
    } catch (err) {
        return { message: err.message }
    }
}

// get all customer
async function getCustomer(id) {
    let customer
    try {
        customer = await Customer.findById(id)
        if (customer == null) {
            return res.status(404).json({ message: 'Cannot find customer' })
        }
    } catch (err) {
        return { message: err.message }
    }
    return customer;
}

module.exports = {
    createCustomer,
    getAllCustomers,
    getCustomer
}