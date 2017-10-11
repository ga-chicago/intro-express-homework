const express = require('express');
const app = express();
const pokemon = require('./models/pokemon');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
	res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
	res.render('index', {poke: pokemon})
})

app.get('/pokemon/:id', (req, res) => {
	res.render('show', {poke: pokemon[req.params.id]})
})

app.listen(3000, () => {
	console.log('app is listening')
})