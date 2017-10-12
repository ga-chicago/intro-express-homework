const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//add create route
//add new route
//add a controller
const pokemonController = require('./controllers/pokemon')
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
//
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'))


app.use('/pokemon', pokemonController)

app.listen(3000, ()=>{
	console.log('I am listening on port 3000')
})