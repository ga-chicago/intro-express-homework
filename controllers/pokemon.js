const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon')
router.get("/new", (req, res) => {
res.render('new',{});
})

router.post("/new", (req, res) => {
console.log(req.body);
pokemon.push(req.body);
res.redirect('/pokemon');
})

router.get("/", (req, res) => {
	res.render('index',{pokemon});
})

router.get("/:id", (req, res) => {
	res.render('show',{poke: pokemon[req.params.id]});
})


module.exports = router;