const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon.js');



router.get('/', (req, res)=>{
	res.render('index', {pokemon});
});


router.get('/new', (req, res)=>{
	res.render('new', {});
});

router.post('/create', (req, res)=>{
	pokemon.push({name: req.body.name, img: req.body.imgURL});
	res.redirect('/pokemon/' + (pokemon.length - 1));
});

router.get('/:id', (req, res)=>{
	res.render('show', {pokemon: pokemon[req.params.id]});
});






module.exports = router;