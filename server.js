const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override')

const pokemonController = require('./controllers/pokemon')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}))

app.use(methodOverride('_method'))

app.use('/', pokemonController)

app.listen(3000, () => {
	console.log('app is listening')
})