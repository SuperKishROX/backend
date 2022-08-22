const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const vehicleSchema = require('./vehicleModel');

const embddedCustomerSchema = new Schema({
    _id: false,
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

const embddedCustomerHistorySchema = new Schema({
    _id: false,
    motorAccident: {
        type: Boolean,
        required: true
    },
    convictedOffence: {
        type: Boolean,
        required: true
    },
    disqualified: {
        type: Boolean,
        required: true
    },
    refusedInsurance: {
        type: Boolean,
        required: true
    },
    LicenceNumber: {
        type: String,
        required: true
    },
    LicenceIssueDate: {
        type: Date,
        required: true
    }
}
)

//Claim Schema
const claimSchema = new Schema({
    _id: {
        type: String
    },
    recordId: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: false
    },
    customer: embddedCustomerSchema,
    customerHistory: embddedCustomerHistorySchema,
    vehicle: vehicleSchema.vehicleSchema,
})

const Claim = mongoose.model('Claim', claimSchema);
const EmbeddedCustomerHistory = mongoose.model('CustomerHistory', embddedCustomerHistorySchema);

module.exports = {Claim, EmbeddedCustomerHistory};