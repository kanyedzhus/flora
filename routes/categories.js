var express = require("express");
var router = express.Router();
var models = require("../models");

//Get categories by parent id
router.get("/:parentId", (req, res) => {
	const { parentId } = req.params;

	models.category
		.findAll({
			attributes: ["categoryId", "categoryName", "parentId"],
			where: { parentId },
		})
		.then((categories) => res.send(categories))
		.catch((err) => res.status(500).send({ error: err.message }));
});

module.exports = router;
