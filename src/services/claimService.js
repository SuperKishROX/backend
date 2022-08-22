const axios = require('axios');
const FormData = require("form-data");
const fs = require("fs");

const Claim = require('../models/claimModel');

const Customer = require('../models/customerModel');
const Vehicle = require('../models/vehicleModel');

const DataProcessor = require('../utils/carRecognitionAPIDataProcessor');

//Search all claims
async function getAllClaims() {
    let claims;

    try {
        claims = await Claim.Claim.find().sort({ createdAt: -1 })

        if (!claims) {
            return res.status(404).json({ message: 'No claims found' })
        }

    }
    catch (err) {
        return { message: err.message }
    }
    return claims;
}

// create claim record
async function createClaim(claimDTO, claimImagePath) {

    let customer;
    try {
        customer = await Customer.findById(claimDTO.customer.membershipId);
        if (customer == null) {
            return { message: `Cannot find specific customer with id: ${claimDTO.customer.membershipId}` }
        }
    }
    catch (err) {
        return { message: err.message }
    }

    console.log(JSON.stringify(claimDTO.customerHistory))

    let claim = new Claim.Claim({
        _id: claimDTO.recordId,
        recordId: claimDTO.recordId,
        image: claimImagePath,
        customer: customer,
        customerHistory: new Claim.EmbeddedCustomerHistory(claimDTO.customerHistory),
        vehicle: new Vehicle.Vehicle(claimDTO.vehicle)
    });

    console.log(claimImagePath);

    try {
        const newClaim = await claim.save();
        return newClaim;
    } catch (err) {
        return { message: err.message }
    }
}

async function autogen(claimImagePath) {

    var plate_body = new FormData();
    var car_body = new FormData();

    plate_body.append("upload", fs.createReadStream(claimImagePath));
    plate_body.append("regions", "au");

    car_body.append("upload", fs.createReadStream(claimImagePath));

    var plate_config = {
        method: 'POST',
        url: `https://${process.env.NPAPI_URL}`,
        headers: {
            Authorization: `Token ${process.env.NPAPI_KEY}`,
        },
        data: plate_body,
    };

    var car_config = {
        method: 'POST',
        url: "https://api.carnet.ai/v2/mmg/detect?box_offset=0&box_min_width=180&box_min_height=180&box_min_ratio=1&box_max_ratio=3.15&box_select=center&features=mmg&region=DEF",
        headers: {
            "Content-Type": "application/octet-stream",
            "Accept":"application/json",
            "api-key": `${process.env.CRAPI_KEY}`,
        },
        data: car_body,
    };

    var result = {test : "hello"};

    var plate = await axios(plate_config)
        .then(function (response) {
            let veh_plate = { plate: response.data.results[0].plate };
            console.log(veh_plate);
            return veh_plate;
        })
        .catch(function (error) {
            return { message: error.message }
        });

    var car = await axios(car_config)
        .then(function (response) {
            let processedResponse = DataProcessor.processData(response.data);
            console.log(processedResponse);
            return processedResponse;
        })
        .catch(function (error) {
            return { message: error.message }
        });

    return Object.assign(plate, car);
}

async function getClaim(id) {
    let claim;

    try {
        claim = await Claim.findById(id);
        if (claim == null) {
            return { message: `Cannot find specific claim with id: ${id}` }
        }
    }
    catch (err) {
        return { message: err.message }
    }
    return claim;
}


module.exports = {
    getAllClaims,
    createClaim,
    getClaim,
    autogen
}