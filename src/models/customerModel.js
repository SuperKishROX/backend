const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    _id: {
        type: String
    },
    membershipId: {
        type: String,
        required: true
    },
    givenName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    emailAddress: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    dob: {
        type: Date,
        required: true,
    },
    nonPolicyFirstName: {
        type: String
    },
    nonPolicyLastName: {
        type: String
    },
    nonPolicyPhone: {
        type: String
    },
    nonPolicyDoB: {
        type: Date
    },
    driverPermission: {
        type: String
    },
    nonDriverHasInsurance: {
        type: String
    },
    lastRider: {
        type: Number
    },
    driverRelation: {
        type: Number
    }
})

const customerModel = mongoose.model('Customer', customerSchema);

module.exports = customerModel;
