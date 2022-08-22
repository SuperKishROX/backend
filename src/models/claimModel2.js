const mongoose = require('mongoose');
const Schema2 = mongoose.Schema;

const embddedCustomerS2 = new Schema2({
    Id: false,
    
})

//Claim Schema V2_Test
const claimS2 = new Schema2({

    customer: embddedCustomerS2
    
})

const Claim = mongoose.model('Claim', claimS2);

module.exports = Claim;