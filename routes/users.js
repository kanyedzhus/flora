var express = require('express');
var router = express.Router();
var models = require ("../models")

/* GET users listing. */
//  router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
//  });

// Get all users
router.get("/", async (req, res) =>{ 
  try {
      const response = await models.user.findAll({attributes:["userId","userName","email","firstName","lastName","role"]});
      res.send(response);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  
});

//Post user
router.post("/", (req, res) =>{
  const {userName, email, hashedPassword, firstName, lastName, imgUrl, role, stripeId } = req.body;
   
    models.user.create({userName, email, hashedPassword, firstName, lastName, imgUrl, role, stripeId}).then((data) => res.send(data))
    .catch((error) => {
    res.status(500).send(error);
});
});

// get all addresses
router.get("/address", async (req, res) =>{ 
  try {
      const response = await models.address.findAll({attributes:["addressId","userId","line1","line2","city","postalCode","country"]});
      res.send(response);
    } catch (err) {
      res.status(400).send({ message: err.message });
    } 
});

// post addresse by user id
router.post("/")


module.exports = router;
