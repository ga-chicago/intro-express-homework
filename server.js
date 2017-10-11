const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pokemonController = require('./controllers/pokemonController.js');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use('/static', express.static('public'))
app.use(bodyParser.urlencoded({extended: false}));

app.use('/pokemon/', pokemonController);



app.listen(3000, ()=>{
	console.log('port 3000 ready for action');
});