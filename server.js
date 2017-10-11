const express = require('express');
const app     = express();
const pokemon = require('./models/pokemon')






app.get('/', (req, res) =>{
	res.send('Welcome To The Pokemon APP!')
})





app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')


app.get('/pokemon', (req, res) =>{
	res.render('index', {

					pokemon
						
						})

})

app.get('/pokemon/:id', (req,res)=>{
	res.send(req.params.id)
	res.render('show',{ poke: pokemon[req.params.id]});
	
})

app.get('/pokemon/:id', (req,res)=>{
	res.send(re)
})


app.get('/pokemon', (req, res) =>{

	res.send(pokemon)
})








app.listen(3000, () => {

	console.log('i am listening i am port 3000')
})