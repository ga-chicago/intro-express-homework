const express = require('express');
const app = express();
const pokemon = require('./models/pokemon')

//tell express where view is
app.set('views',__dirname + '/views');
app.use('/static', express.static('public'));
app.set('view engine', 'ejs');

//

app.get("/", (req, res) => {
	res.send("welcome to the pokemon app");
})

app.get("/pokemon", (req, res) => {
res.render('index',{pokemon});
})

app.get("/pokemon/:id", (req, res) => {
res.render('show',{poke: pokemon[req.params.id]});
})


app.listen(3000, () => {
	console.log("listening on port 3000");
})