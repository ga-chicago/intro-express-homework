const express = require('express');
const app = express();
const pokemon = require('./models/pokemon.js');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/pokemon', (req, res)=>{
	res.send(pokemon);
});








































app.listen(3000, ()=>{
	console.log('port 3000 ready for action');
});