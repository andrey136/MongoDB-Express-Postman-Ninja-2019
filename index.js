const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// set up express app
const app = express();

app.use(bodyParser.json());

app.use(express.static('public'));

// connect to mongodb
mongoose.connect('mongodb+srv://andrey:tripleks@cluster0-sys07.mongodb.net/test');
mongoose.Promise = global.Promise;

// initialize routes
app.use('/api', require('./routes/api'));

// error handling middleware
app.use((err, req, res, next) => {
  //console.log(err);
   res.status(422).send({error: err._message});
});

// listen to requests
app.listen(4000, () => {
  console.log('now listening to requests');
});