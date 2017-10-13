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



router.get('/:index/edit', (req, res) => {
	res.render('edit', {
		allPokemon: pokemon[req.params.index],
		index: req.params.index
	});
})



router.post('/create', (req, res) => {
	console.log(req.body);
	if (req.body.placement === 'on') {
		req.body.placement = true;
	} else {
		req.body.placement = false;
	}
	pokemon.push(req.body);
	res.redirect('/pokemon');
})



router.put('/:index/edit', (req, res) => {
	console.log(req.body);
	if (req.body.placement === 'on') {
		req.body.placement = true;
	} else {
		req.body.placement = false;
	}
	pokemon[req.params.index] = req.body;
	res.redirect('/pokemon');
})



router.delete('/:index', (req, res) => {
	console.log('hitting the delete route');
	console.log(req.params.index);
	pokemon.splice(req.params.index, 1);
	res.redirect('/pokemon');
})



module.exports = router;
