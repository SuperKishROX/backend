const Claim = require('../models/claimModel');
const claimService = require('../services/claimService');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
      },
    filename: function (req, file, cb) {
        var fileName = file.originalname
        var ext = fileName.substring(fileName.lastIndexOf('.') + 1);
        cb(null, 'entry'+'.'+ext);
    }
});

const uploadImg = multer({storage: storage}).single('image');

//Get all the claims from the DB
async function getAllClaims(req,res, next) {
    try{
        res.json(await claimService.getAllClaims());
    }
    catch(err)
    {
        console.error(`Error while trying to get claim`, err.message);
        next(err);
    }
};


async function createClaim(req,res,next){
    
    try{
        const claimDTO = req.body;
        let claimImagePath = "";
        if (req.file){
            claimImagePath = req.file.path;
        }

        res.json(await claimService.createClaim(claimDTO,claimImagePath));
    }
    catch(err){
        console.error(`Error while trying to add a claim`, err.message);
        next(err);
    }

}

async function autogen(req,res,next){

    try{
        let claimImagePath = "";
        if (req.file){
            claimImagePath = req.file.path;
        }

        console.log(claimImagePath);

        res.json(await claimService.autogen(claimImagePath));
    }
    catch(err){
        console.error(`Error while trying to add a claim`, err.message);
        next(err);
    }

}

async function getClaim(req,res){
    const id = req.params.id;
    try {
        res.json(await claimService.getClaim(id));
    } catch (err) {
        console.error(`Error while getting claim`, err.message);
        next(err);
    }
}

module.exports = {getAllClaims, createClaim, getClaim, uploadImg, autogen};