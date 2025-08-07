const express= require('express');
const{ addProfileDetails}= require('./controller/profileController');

const router= express.Router();

router.post('/addProfileDetails')

module.exports= router;