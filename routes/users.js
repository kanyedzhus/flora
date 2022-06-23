var express = require("express");
var router = express.Router();
var models = require("../models");

/* GET users listing. */
//  router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
//  });


// Get all users / buyer
router.get("/buyers", async (req, res) =>{ 
  try {
      const response = await models.user.findAll({attributes:["userId","userName","email","firstName","lastName","role"]});
      res.send(response);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  
});

//Post user / buyer
router.post("/buyers", (req, res) =>{
  const {userName, email, hashedPassword, firstName, lastName, imgUrl, role, stripeId } = req.body;
   
    models.user.create({userName, email, hashedPassword, firstName, lastName, imgUrl, role, stripeId}).then((data) => res.send(data))
    .catch((error) => {
    res.status(500).send(error);
});

// Get all users
router.get("/", async (req, res) => {
	try {
		const response = await models.user.findAll({
			attributes: [
				"userId",
				"userName",
				"email",
				"firstName",
				"lastName",
				"role",
			],
		});
		res.send(response);
	} catch (err) {
		res.status(400).send({ message: err.message });
	}
});

//Post user - buyer
// route: "/users/buyers"
router.post("/buyers", (req, res) => {
	const {
		userName,
		email,
		hashedPassword,
		firstName,
		lastName,
		imgUrl,
		role,
		stripeId,
	} = req.body;

	console.log(req.body);
	models.user
		.create({
			userName,
			email,
			hashedPassword,
			firstName,
			lastName,
			imgUrl,
			role,
			stripeId,
		})
		.then((data) => res.send(data))
		.catch((error) => {
			res.status(500).send(error);
		});

});

// Get all users / sellers
router.get("/sellers", async (req, res) =>{ 
  try {
      const response = await models.user.findAll({attributes:["userId","userName","email","firstName","lastName","role"]});
      res.send(response);
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  
});


//Post user - seller
// route: "/users/sellers"
router.post("/sellers", async (req, res) => {
  // destructure variables from req.body
	const {
		userName,
		email,
		hashedPassword,
		firstName,
		lastName,
		imgUrl,
		role,
		stripeId,
		storeName,
		storeDescription,
	} = req.body;

	try {
    // destructure user and seller from models
		const { user, seller } = models;

    // create user with role of seller and save the result in a variable
		const vendor = await user.create({
			userName,
			email,
			hashedPassword,
			firstName,
			lastName,
			imgUrl,
			stripeId,
			role,
		});

		console.log({ vendor });
    // get the userID from the variable returned from creating a user with the role of seller
		const userId = vendor.userId;

    // create entry in the Sellers table for the user created above and use the userId above as the foreign key
		await seller.create({
			userId,
			storeName,
			storeDescription,
		});

		res.send(vendor);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

// get all addresses
router.get("/address", async (req, res) => {
	try {
		const response = await models.address.findAll({
			attributes: [
				"addressId",
				"userId",
				"line1",
				"line2",
				"city",
				"postalCode",
				"country",
			],
		});
		res.send(response);
	} catch (err) {
		res.status(400).send({ message: err.message });
	}
});


// // post address by user id
// router.post("/address/:userId", (req, res) =>{
//   const {userId} = req.params;
//   const {line1, line2, city, postalCode, country} = req.body;
//   models.user.findOne({where:{userId},})
//   .then((user) =>{user.createaddress({line1, line2, city, postalCode, country})
//   .then((data)=>{res.send(data);})
//   .catch((err)=>{res.status(400).send({ message: err.message })})})
// })

// post addresse by user id
router.post("/address/:userId");


module.exports = router;
