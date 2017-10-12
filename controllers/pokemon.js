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

router.post('/create',(req,res)=>{
	console.log(req.body)
})

module.exports = router;