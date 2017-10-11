const express = require('express');
const router  = express.Router();
const pokemon  = require('../models/pokemon')

router.get('/pokemon', (req, res) =>{
	res.render('index', {

					pokemon
						
						})

})
router.get('/pokemon/new', (req,res)=>{
	res.render('new', {})

})

router.get('/pokemon/:id', (req,res)=>{
	
	res.render('show',{ poke: pokemon[req.params.id]});
	
})




router.get('/pokemon', (req, res) =>{

	
})

// router.get('/:index', (req, res) =>{
// 	res.render('show',{ pokemon: pokemon[req.params.index]});
// })



router.post('/pokemon/create', (req, res)=>{
	console.log(req.body)


	pokemon.push(req.body)

	res.redirect('/pokemon')

})



module.exports = router;