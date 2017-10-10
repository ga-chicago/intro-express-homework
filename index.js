const express = require('express');
const app = express();

app.get("/", (req, res) => {
res.send("welcome to the pokemon app");
})

app.listen(3000, () => {
	console.log("listening on port 3000");
})