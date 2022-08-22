const express = require('express');
const router = express.Router();
const claimController = require('../controllers/claimController');

//for the /claims url
router.get('/', claimController.getAllClaims);
router.post('/', claimController.uploadImg,claimController.createClaim);
router.post('/autogen', claimController.uploadImg, claimController.autogen);
router.get('/:id', claimController.getClaim);

module.exports = router;