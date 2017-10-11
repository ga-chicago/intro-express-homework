const express = require('express');
const app = express();
const pokemon = require('./models/pokemon')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// app.get('/pokemon', (req, res) => {
// 	res.send(pokemon);
// })

app.get('/pokemon', (req, res) => {
	res.render('index', {});
})

app.get('', (req, res) => {
	res.send('Welcome to the Pokemon App!')
})

app.listen(3000, () => {
	console.log('app is listening on port 3000');
})