const express = require('express');
const app = express();
const pokemon = require('./models/pokemon')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/pokemon',(req,res)=>{
	res.render('index', {
						pokemonIndex: pokemon
						});  
})

app.get('/pokemon/:id',(req,res)=>{
	res.send(req.params.id);
})

app.listen(3000, ()=>{
	console.log('I am listening on port 3000')
})