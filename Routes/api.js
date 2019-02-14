const express = require('express');
const router = express.Router();
const Ninja = require ('../models/ninja');
//get a list of ninjas from database
router.get("/ninjas", function(req,res,next) {
  // If you want to get all of the ninjas
  // Ninja.find({}).then(function(ninjas) {
    // res.send(ninjas);
  // })
//   Ninja.geoNear(
//     {type:"Point", coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
//     {maxDistance: 100000, spherical:true}
//   ).then(function(ninjas){
//     res.send(ninjas);
//   });
// });
 // Ninja.aggregate().near({
 //    near: [parseFloat(req.query.lng), parseFloat(req.query.lat)],
 //    maxDistance: 100000,
 //    spherical: true,
 //    distanceField: 'dist.calculated'
 //  }).then(function (ninjas) {
 //    res.send(ninjas)
 //  }).catch(next)﻿

  Ninja.aggregate([{ $geoNear: {
     near: {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
      spherical: true,
      maxDistance: 100000,
      distanceField: "dist.calculated" } }]).then(function(results){ res.send(results); });

//add a new ninja from database
router.post("/ninjas", function(req,res,next) {
  Ninja.create(req.body).then (function(ninja) {
    res.send(ninja);
  }).catch(next);
});
});

//update a ninja from database
router.put("/ninjas/:id", function(req,res,next) {
  res.send({type: "PUT"});
});

//delete a ninja from database
router.delete("/ninjas/:id", function(req,res,next) {
Ninja.findByIdAndRemove({_id:req.params.id}).then(function(ninja){
  res.send(ninja);
});
});

module.exports = router;
