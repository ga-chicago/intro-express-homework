const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon');

router.get('/', (req, res) => {
	res.send(`Welcome to the Poke'Center`)
})

router.get('/pokemon', (req, res) => {
	res.render('index', {pokemon});
})

router.get('/pokemon/new', (req, res) =>{
	res.render('new', {});
})

router.put('/pokemon/:index', (req, res) =>{
	pokemon[req.params.index] = req.body
	res.redirect('/pokemon');
})

router.delete('/pokemon/:index', (req, res) =>{
	pokemon.splice([req.params.index], 1);
	res.redirect('/pokemon');
})

router.post('/pokemon/create', (req, res)=>{
	pokemon.push(req.body);
	res.redirect('/pokemon');
})

router.get('/pokemon/:id', (req, res) => {
	res.render('shows', {pokemon: pokemon[req.params.id], i: req.params.id});
});

module.exports = router;