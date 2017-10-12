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

router.post('/pokemon/create', (req, res)=>{
	console.log(req.body)
	pokemon.push(req.body);
	res.redirect('/pokemon');
})

router.get('/pokemon/:id', (req, res) => {
	res.render('shows', pokemon[req.params.id]);
});

module.exports = router;