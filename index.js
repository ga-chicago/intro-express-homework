const express = require('express');
const app = express();

app.get('/', (req, res) => {
	res.send(`Welcome to the Poke'Center`)
})



app.listen(3000, () =>{
	console.log('server is up');
});