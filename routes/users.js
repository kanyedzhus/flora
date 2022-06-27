const express = require("express");
const router = express.Router();
const models = require("../models");
const stripeAPI = require("../StripeAPI/stripe");

/* GET users listing. */
//  router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
//  });

// Get all users / buyer
router.get("/buyers", async (req, res) => {
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
router.post("/buyers", async (req, res) => {
	const { userName, email, hashedPassword, firstName, lastName, imgUrl, role } =
		req.body;
	console.log(req.body);
	try {
		// create customer on Stripe
		const stripeCustomer = await stripeAPI.customers.create({
			email: email,
			description: userName,
			name: firstName + " " + lastName,
		});

		// console.log(stripeCustomer);
		// get the stripe customer id
		const stripeId = stripeCustomer.id;

		// destructure from models
		const { user, buyer } = models;

		// insert into users table, role is buyer
		const customer = await user.create({
			userName,
			email,
			hashedPassword,
			firstName,
			lastName,
			imgUrl,
			role,
		});

		const userId = customer.userId;
		// insert into buyers table

		const buyerWithStripeId = await buyer.create({
			userId,
			stripeId,
		});

		res.send({ buyer, buyerWithStripeId });
	} catch (error) {
		res.status(500).send(error);
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
