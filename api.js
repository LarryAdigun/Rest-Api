const express = require('express');
const router = express.Router();

//get a list of ninjas from database
router.get("/ninjas", function(req,res) {
  res.send({type: "GET"})
})

//add a new ninja from database
router.post("/ninjas", function(req,res) {
  res.send({type: "POST"})
})

//update a ninja from database
router.put("/ninjas/:id", function(req,res) {
  res.semd({type: "PUT"})
})

//delete a ninja from database
router.delete("/ninjas/:id", function(req,res) {
  res.send({type: "DELETE"})
})

module.exports = router;
