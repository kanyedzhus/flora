var express = require('express');
var router = express.Router();
var models = require ("../models")

/* GET users listing. */
 router.get('/', function(req, res, next) {
  res.send('respond with a resource');
 });

// router.get("/user", async (req, res) =>{ 
//   try {
//       const response = await models.user.findAll({attributes:["userId","userName","email","firstName","lastName","role"]});
//       res.send(response);
//     } catch (err) {
//       res.status(400).send({ message: err.message });
//     }
  
// });

module.exports = router;
