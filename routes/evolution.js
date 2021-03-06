const express = require('express');
const router = express.Router();
const evolutionController = require('../controllers/evolution');

//POST evolution
router.post('/add',evolutionController.addEvolution)

//GET 
router.get('/',evolutionController.getEvolution);

module.exports= router;