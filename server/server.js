require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const usersRoute = require('./routes/users.routes');
const exercisesRoute = require('./routes/exercises.routes');

app.use(cors());
app.use(express.json());
app.use('/users',usersRoute);
app.use('/exercises',exercisesRoute);

mongoose.connect(process.env.MONGO)
	.then(()=>console.log(`mongoose connect`))
	.catch((err)=>console.error(err));

app.get('/',(req,res)=>{
	res.send('hello');
});

app.listen(process.env.PORT,(req,res)=>{
	console.log(`server on : ${process.env.PORT}`)
});