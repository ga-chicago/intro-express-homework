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

router.get('/:id/edit', (req, res) => {
	res.render('edit', {i: req.params.id, pokemon: pokemon[req.params.id]})
})

router.post('/create', (req, res) => {
	pokemon.push(req.body);
	res.redirect('/');
})

router.put('/:id/edit', (req, res) => {
	pokemon[req.params.id] = req.body;
	res.send('you edited blah blah');
	res.redirect('/fruits');
})

router.delete('/:id', (req, res) => {
	res.redirect('/pokemon');
	pokemon.splice(req.params.id, 1);
})

module.exports = router;