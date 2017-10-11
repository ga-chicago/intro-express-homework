const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon')

router.get('/', (req, res) => {
	res.send('Welcome to the Pokemon App!')
})

router.get('/pokemon', (req, res) => {
	res.render('index', {poke: pokemon})
})

router.get('/pokemon/new', (req, res) => {
	res.render('new', {})
})

router.get('/pokemon/:id', (req, res) => {
	res.render('show', {poke: pokemon[req.params.id]})
})

router.post('/pokemon/create', (req, res) => {
 	pokemon.push(req.body)
 	res.redirect('/pokemon')
})

module.exports = router;