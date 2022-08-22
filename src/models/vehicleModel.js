const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    _id: false,
    vehicleId: {
        type: String,
        required: true,
        unique: true
    },
    plate: {
        type: String,
        required: true,
        unique: true
    },
    generation_id: {
        type: String,
    },
    generation_name: {
        type: String,
    },
    make_id: {
        type: String,
    },
    make_name: {
        type: String,
    },
    model_id: {
        type: String,
    },
    model_name: {
        type: String,
    },
    years: {
        type: String,
    },
    rego: {
        type: String,
    },
    bodyType: {
        type: String,
    },
    colour: {
        type: String,
    },
    engineNumber: {
        type: String,
    }
})

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = {
    Vehicle,
    vehicleSchema
}