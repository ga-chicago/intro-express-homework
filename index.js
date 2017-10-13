const express = require('express');
const methodOverride = require('method-override');
const app = express();
const bodyParser = require('body-parser');

const pokeController = require('./controllers/pokemon')

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride('_method'));

app.get('/', (req, res) => {
	res.send('Welcome to the Pokemon App!')
})

app.use('/pokemon', pokeController);

app.use(express.static('public'));

app.listen(3000, () => {
	console.log('app is listening on port 3000');
})