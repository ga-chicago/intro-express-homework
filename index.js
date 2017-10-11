const express = require('express');
const app = express();
const pokemon = require('./models/pokemon')

app.get('/',(req,res)=>{
	res.send(pokemon)
})

app.listen(3000, ()=>{
	console.log('I am listening on port 3000')
})