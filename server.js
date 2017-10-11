const express = require('express');
const app     = express();
const pokemonController = require('./controllers/pokemon')
//add create route
//add new route
//add to controller
const bodyParser = require('body-parser')



app.get('/', (req, res) =>{
	res.send('Welcome To The Pokemon APP!')
})

app.use(express.static('public'))



app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

// app.get('/pokemon/new', (req,res)=>{
// 	res.render('new', {})

// })


// app.post('/pokemon/create', (req, res)=>{
// 	console.log(req.body)


// 	pokemon.push(req.body)

// 	res.redirect('/pokemon')

// })

app.use(bodyParser.urlencoded({extended: false}));

app.use('/', pokemonController)









app.listen(3000, () => {

	console.log('i am listening dasfdsafdsi am port 3000')
})