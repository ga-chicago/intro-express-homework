const express = require("express")
const router = express.Router()

const pokemon = require("../models/pokemon.js")

router.get("./", (req, res) => {
	res.send("Welcome to the Pokemon App!")
})

router.get("/", (req, res) => {
	res.render("index", {pokemon})
})

router.get("/:id", (req, res) => {
	index = req.params.id
	res.render("show", {thisPokemon: pokemon[index]})
})

router.post("/hatch", (req, res) => {

	console.log(`http://img.pokemondb.net/artwork/${req.body.name.toLowerCase()}.jpg`)
	pokemon.push({
		name: req.body.name,
		img: `http://img.pokemondb.net/artwork/${req.body.name.toLowerCase()}.jpg`
	})
	res.redirect("/pokemon")
});

router.delete("/:index", (req, res) => {			
			pokemon.splice(req.params.index, 1)		
			res.redirect("/pokemon")
		})

module.exports = router