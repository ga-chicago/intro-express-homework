const express = require('express');
const app = express();
const pokemon = require('./models/pokemon');

app.get('/', (req, res) => {
	res.send(`Welcome to the Poke'Center`)
})

app.get('/pokemon', (req, res) => {
	res.send(pokemon);
})


app.listen(3000, () =>{
	console.log('server is up');
});