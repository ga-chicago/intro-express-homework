const express = require('express');
const app     = express();
const pokemon = require('./models/pokemon')


app.get('/', (req, res) =>{
	res.send('Welcome To The Pokemon APP!')
})

app.get('/pokemon', (req, res) =>{

	res.send(pokemon)
})



app.listen(3000, () => {

	console.log('i am listening i am port 3000')
})