const express = require("express");
const router = express.Router();
const db = require("../model/helper");
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

// for creating a product in our db. Will need to edit this to suit specific details. "the name passed to upload.single will need to be matched in the frontend and sent in the payload
router.post("/", upload.single("product_image"), async (req, res, next) => {
	// info about the file uploaded is in req.file, which multer makes available to us.
	console.log(req.file, req.body);
	const { filename, path } = req.file;

	// windows file paths  use only backslash, but the forward slash is needed to make the file url accessible. this regular expression will find all back slashes and replace with forward slash in path.
	const correctedPath = path.replace(/\\/g, "/");

	// destructure necessary info from req.body to make insert into db.
	const {
		categoryId,
		desc,
		color,
		imgURL,
		price,
		quantity,
		careDifficulty,
		light,
		petFriendly,
		airPurifying,
	} = req.body;
});
