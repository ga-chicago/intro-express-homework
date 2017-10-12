const express = require('express');
const router = express.Router();
const pokemon = require('../models/pokemon');

router.get('/',(req,res)=>{
	res.render('index', {pokemon});  
})

router.get('/new',(req,res) =>{
	res.render('new',{})
})

router.get('/:id',(req,res)=>{
	res.render('show',pokemon[req.params.id]);
})

router.get('/:index/edit',(req,res)=>{
	res.render('edit', {
		pokemon: pokemon[req.params.index],
		index: req.params.index
	})
})

router.post('/create',(req,res)=>{
	console.log(req.body)
	pokemon.push(req.body)
	res.redirect('/pokemon')
})
router.put('/:index/edit',(req,res)=>{
	console.log(req.body)
	

	pokemon[req.params.index] = req.body
	res.redirect('/pokemon')
})

router.delete('/:index', (req,res)=>{ //listening for delete request
	console.log('hitting the delete route')
	console.log(req.params.index)
	//model is removing the item out of the array in models folder
	pokemon.splice(req.params.index, 1);
	res.redirect('/pokemon')
})

module.exports = router;