const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// require controller
const pokemonController = require('./controllers/pokemon');

//tell express where are view is
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


// parse req.body
app.use(bodyParser.urlencoded({extended: false}));

// link to public folder assets
app.use(express.static('public'));

// use our pokemon controller
app.use('/', pokemonController)


app.listen(3000, () => {
	console.log('This is the Poke Express on port 3000');
});