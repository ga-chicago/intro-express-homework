const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon');

router.get('/new', (req, res) => {
	res.render('new', {})
});

router.get('/', (req, res) => {
	res.render('index', {pocket: pokemon});
})

router.get('/:id', (req, res) => {
	res.render('show', {monsters: pokemon[req.params.id]})
})

router.post('/create', (req, res) => {
	pokemon.push(req.body);
	res.redirect('/');
})

module.exports = router;