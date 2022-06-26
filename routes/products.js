const express = require("express");
const router = express.Router();
const models = require("../models");
const stripeAPI = require("../StripeApi/stripe");

// this package allows us to handle FormData (different content type) - both text and files
const multer = require("multer");

// for adjusting how files get stored. multer will execute these functions whenever a new file is received
const storage = multer.diskStorage({
	// these functions have access to the info about the file in the file object (2nd arg)
	destination: function (req, file, cb) {
		// cb takes an error as first argument and the path for storage as second
		cb(null, "./public/files/");
	},
	filename: function (req, file, cb) {
		// this configures the filename in the db. Adding date infront of originalname protects against potentially overwriting files
		cb(null, Date.now() + "-" + file.originalname);
	},
});

// configuring multer. Can add properties for file limits, type, size etc
const upload = multer({ storage: storage });
// "/products"
router.post("/", upload.single("imgURL"), async (req, res, next) => {
	// info about the file uploaded is in req.file, which multer makes available to us.
	// console.log(req.file, req.body);
	const { path } = req.file;
	// console.log(req.file);

	// windows file paths  use only backslash, but the forward slash is needed to make the file url accessible. this regular expression will find all back slashes and replace with forward slash in path.
	const correctedPath = path.replace(/\\/g, "/");

	// destructure necessary info from req.body to make insert into db.
	// might not need sellerid from req.body as user will be logged in. maybe a default value in create statement?
	const {
		categoryId,
		description,
		productName,
		price,
		quantity,
		easyCare,
		light,
		petFriendly,
		airPurifying,
	} = req.body;
	console.log(req.body);
	// get price in cents to send to stripe
	const priceInCents = price * 100;

	try {
		// create product in stripe
		const stripeProduct = await stripeAPI.products.create({
			name: productName,
			description,
			// can't use images since they're local
			// images: [correctedPath],
			// adding this property will automatically create an associated price object.
			default_price_data: { currency: "eur", unit_amount: priceInCents },
		});
		console.log(stripeProduct);
		// get stripeProduct id to save in db
		const stripeProductId = stripeProduct.id;

		// get the stripe price id automatically created with the product. use this in db
		const stripePriceId = stripeProduct.default_price;
		console.log(stripePriceId);

		//* sellerId is hard coded for test. Needs to change. Same for categoryId
		const newProduct = await models.product.create({
			categoryId,
			sellerId: 1,
			description,
			productName,
			imgURL: correctedPath,
			price,
			quantity,
			easyCare,
			light,
			petFriendly,
			airPurifying,
			stripeProductId: stripeProductId,
			stripePriceId: stripePriceId,
		});

		console.log({ newProduct });
		res.send(newProduct);
	} catch (error) {
		res.status(500).send(error);
	}
});

//Get all products
// /products
router.get("/", (req, res) => {
	models.product
		.findAll({
			attributes: [
				"productId",
				"categoryId",
				"sellerId",
				"description",
				"imgURL",
				"price",
				"quantity",
				"easyCare",
				"light",
				"petFriendly",
				"airPurifying",
			],
		})
		.then((product) => res.send(product))
		.catch((err) => res.status(500).send({ error: err.message }));
});

// Get products by category Id
// /products/:categoryId
router.get("/category/:categoryId", (req, res) => {
	const { categoryId } = req.params;
	// console.log(models)
	models.product
		.findAll({
			where: { categoryId },

			attributes: [
				"productId",
				"description",
				"categoryId",
				"sellerId",
				"imgURL",
				"price",
				"quantity",
				"easyCare",
				"light",
				"petFriendly",
				"airPurifying",
			],
		})
		.then((seller) => res.send(seller))
		.catch((err) => res.status(500).send({ error: err.message }));
});

//Get product by product Id
// /products/:productId
router.get("/:productId", (req, res) => {
	const { productId } = req.params;
	// console.log(models)
	models.product
		.findAll({
			where: { productId },

			attributes: [
				"productId",
				"description",
				"categoryId",
				"sellerId",
				"imgURL",
				"price",
				"quantity",
				"easyCare",
				"light",
				"petFriendly",
				"airPurifying",
			],
		})
		.then((seller) => res.send(seller))
		.catch((err) => res.status(500).send({ error: err.message }));
});

// Get products by seller Id
// /products/sellers/:sellerId
router.get("/sellers/:sellerId", (req, res) => {
	const { sellerId } = req.params;
	models.sellers
		.findAll({
			where: { sellerId },

			attributes: [
				"productId",
				"description",
				"categoryId",
				"sellerId",
				"imgURL",
				"price",
				"quantity",
				"easyCare",
				"light",
				"petFriendly",
				"airPurifying",
			],
		})
		.then((seller) => res.send(seller))
		.catch((err) => res.status(500).send({ error: err.message }));
});

//Put (edit) product by description, price, quantity
// /products/:productId
router.put("/:productId", async (req, res) => {
	const { productId } = req.params;

	try {
		const response = await models.product.findOne({
			where: { productId },
			attributes: [
				"productId",
				"description",
				"categoryId",
				"sellerId",
				"imgURL",
				"price",
				"quantity",
				"easyCare",
				"light",
				"petFriendly",
				"airPurifying",
			],
		});
		console.log(response);

		const { description, price, quantity } = req.body;
		const data = await response.update({ description, price, quantity });

		res.send(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

//Delete a product by product Id
// /products/:productId
router.delete("/:productId", async (req, res) => {
	const { productId } = req.params;

	try {
		const data = await models.product.destroy({ where: { productId } });
		res.status(200).json(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;
