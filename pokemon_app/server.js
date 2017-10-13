const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const methodOverride = require("method-override")

const port = 3000

app.listen(port, () => {
	console.log("Gotta catch 'em all!")
}) 

const pokemonController = require("./controllers/pokemonController.js")

app.set("view engine", "ejs");
app.set("views", __dirname + "/views")

app.use(bodyParser.urlencoded({extended:false}))

app.use (methodOverride("_method"));
app.use(express.static("public"))

app.use("/pokemon", pokemonController)