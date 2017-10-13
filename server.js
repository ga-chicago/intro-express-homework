const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');



const pokemonController = require('./controllers/pokemon');



app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



app.use(bodyParser.urlencoded({extended: false}));



app.use(express.static('public'));



app.use(methodOverride('_method'));



app.use('/pokemon', pokemonController);



app.listen(3000, () => {
	console.log('app is listening on port 3000');
})


