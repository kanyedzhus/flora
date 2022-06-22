const express = require("express");
const router = express.Router();
const models = require("../models");
const { QueryTypes } = require("sequelize");

// this package allows us to handle FormData (different content type) - both text and files
const multer = require("multer");
const { sequelize } = require("../models");

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
		sellerId,
		description,
		productName,
		price,
		quantity,
		easyCare,
		light,
		petFriendly,
		airPurifying,
	} = req.body;

	try {
		const newProduct = await models.product.create({
			categoryId,
			sellerId,
			description,
			productName,
			imgURL: correctedPath,
			price,
			quantity,
			easyCare,
			light,
			petFriendly,
			airPurifying,
		});

		console.log({ newProduct });
		res.send(newProduct);
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;
