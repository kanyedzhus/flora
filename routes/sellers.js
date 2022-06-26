var express = require("express");
var router = express.Router();
var models = require("../models");

//Get all sellers
router.get("/", async (req, res) => {
	try {
		const response = await models.seller.findAll({
			attributes: ["userId", "sellerId"],
		});
		res.send(response);
	} catch (err) {
		res.status(400).send({ message: err.message });
	}
});


//Get seller by Id
router.get("/:sellerId", (req, res) => {
	const { sellerId } = req.params;
	console.log(sellerId)

	models.seller
		.findOne({
			attributes: ["sellerId", "userId", "storeName", "storeDescription"],
			where: { sellerId },
		})
		.then((seller) => res.send(seller))
		.catch((err) => res.status(500).send({ error: err.message }));
});

module.exports = router;
