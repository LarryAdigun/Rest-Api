const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
//set up express app
const app = express();

//connect to mongodb

mongoose.connect("mongodb://localhost/ninjago");
mongoose.Promise = global.Promise;

app.use(bodyParser.json());
//initialized routes
app.use('/api', require('./Routes/api'));

//the backslash is the route you are listening for

// app.get("/", function(req,res) {
//   console.log("GET Request");
//   res.send({name: "Larry"})
// })



//listen for request, if it has its own then it will listen for that [port number first
app.listen(process.env.port || 4000, function() {
  console.log("now listening for request");
});
