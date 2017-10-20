const express = require('express');
const router  = express.Router();
const pokemon  = require('../models/pokemon')

router.get('/pokemon', (req, res) =>{
	res.render('index', {pokemon})

})

router.get('/pokemon/new', (req,res)=>{
	res.render('new', {})

})

router.get('/pokemon/:id', (req,res)=>{
	
	res.render('show',{ poke: pokemon[req.params.id]});
	
})

router.post('/pokemon/create', (req, res)=>{
	console.log(req.body)


	pokemon.push(req.body)

	res.redirect('/pokemon')

})
router.get('/pokemon/:index/edit', (req, res)=>{
	res.render('edit', {
		pokemon: pokemon[req.params.index],
		index: req.params.index
	})

});

router.put('/pokemon/:index/edit', (req,res)=>{
	console.log(req.body)
	

	pokemon[req.params.index] = req.body;
	

	res.redirect('/pokemon')
})

router.delete('/pokemon/:index', (req, res)=>{

	pokemon.splice(req.params.index, 1);

	res.redirect('/pokemon')
})



module.exports = router;