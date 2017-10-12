const express = require("express");
const app = express();

const port = 3000

app.listen(port, () => {
	console.log("Gotta catch 'em all!")
}) 

const pokemon = require("./models/pokemon.js")

app.set("view engine", "ejs");
app.set("views", __dirname + "/views")

app.get("/", (req, res) => {
	res.send("Welcome to the Pokemon App!")
})

app.get("/pokemon/", (req, res) => {
	res.render("index", {pokemon})
})

app.get("/pokemon/:id", (req, res) => {
	res.render("show", {thisPokemon: pokemon[req.params.id]})
})