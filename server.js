const express = require('express');
const app     = express();


app.get('/', (req, res) =>{
	res.send('Welcome To The Pokemon APP!')
})





app.listen(3000, () => {

	console.log('i am listening i am port 3000')
})