const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon');



router.get('/', (req, res) => {
	res.render('index', { allPokemon: pokemon });
})



router.get('/:index', (req, res) => {
	res.render('show', { allPokemon: pokemon[req.params.index] });
})



module.exports = router;
