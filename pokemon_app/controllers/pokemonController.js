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
	res.render("show", {thisPokemon: pokemon[req.params.id]})
})

module.exports = router