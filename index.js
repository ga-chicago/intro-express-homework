const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//require controllers
const pokemonController = require('./controllers/pokemon');
//tell express where view is
//set up your folders
app.set('views',__dirname + '/views');
app.use('/static', express.static('public'));
//motr stuff here
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}))
//put the controller here
app.use('/pokemon', pokemonController)

app.listen(3000, () => {
	console.log("listening on port 3000");
})