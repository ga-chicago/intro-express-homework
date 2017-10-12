const express = require('express');
const app = express();
const pokemon = require('./models/pokemon')
const pokemonController = require('./controllers/pokemon')
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.use(express.static('public'));

app.use('/pokemon', pokemonController)

app.listen(3000, () =>{
	console.log("The server is working")
})


