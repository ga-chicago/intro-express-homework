const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon');



router.get('/', (req, res) => {
	res.render('index', { allPokemon: pokemon });
})



router.get('/new', (req, res) => {
	res.render('new', {});
})



router.get('/:index', (req, res) => {
	res.render('show', { allPokemon: pokemon[req.params.index] });
})



router.post('/create', (req, res) => {
	console.log(req.body);

	if (req.body.placement === 'on') {
		req.body.placement = req.body.length;
	}

	pokemon.push(req.body);
	
	res.redirect('/pokemon');
})



module.exports = router;
