const express = require("express");
const app = express();

const port = 3000

app.listen(port, () => {
	console.log("Gotta catch 'em all!")
}) 

app.get("/", (req, res) => {
	res.send("Welcome to the Pokemon App!")
})

