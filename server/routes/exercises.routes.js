const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
let Exercise = require('../models/exercise.model');

router.get('/',(req,res)=>{
	Exercise.find()
		.then(exercises=>res.json(exercises))
		.catch(err=>res.status(400).json(err));
});
router.get('/:id',(req,res)=>{
	Exercise.findById(req.params.id)
		.then(exercise=>res.json(exercise))
		.catch(err=>res.status(400).json(err));
});
router.post('/add',(req,res)=>{
	const username = req.body.username;
	const description = req.body.description;
	const duration = req.body.duration;
	const date = req.body.date;
	
	const newExercise = new Exercise({
		username, description, duration, date,
	});
	newExercise.save()
		.then(()=>res.json('new Exercise added'))
		.catch(err=>res.status(400).json(err));
});
router.delete('/:id',(req,res)=>{
	Exercise.findByIdAndDelete(req.params.id)
		.then(()=>res.json('deleted'))
		.catch(err=>res.status(400).json(err));
});
router.post('/update/:id',(req,res)=>{
	Exercise.findById(req.params.id)
		.then((exercise)=>{
			exercise.username = req.body.username;
			exercise.description = req.body.description;
			exercise.duration = req.body.duration;
			exercise.date = req.body.date;
		
			exercise.save()
				.then(()=>res.json('exercise update'))
				.then(err=>res.status(400).json(err));
		})
		.catch(err=>res.status(400).json(err));
}); 

module.exports = router;