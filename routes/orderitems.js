const express = require("express");
const router = express.Router();
const models = require("../models");
const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models");

//Get order item by orderId
// /orderitems/item/:orderId
router.get("/item/:orderId", async (req, res) => {
	const { orderId } = req.params;
	try {
		const response = await models.orderItem.findAll({
			where: { orderId },
			attributes: [
				"oderItemId",
				"orderId",
				"productId",
				"quantity",
				"createdAt",
			],
		});
		res.send(response);
	} catch (err) {
		res.status(400).send({ message: err.message });
	}
});

//Post all items in a session from cartitems to orderitems
// /orderitems/item
router.post("/post/:cartSessionId/", async (req, res) => {
	const { cartSessionId } = req.params;
	try {
		// need to also have orderid here
		const response = await sequelize.query(
			`insert into orderitems (productId, quantity, price, createdAt, updatedAt) select productId, quantity, price, now(), now() from cartitems where cartSessionId=${cartSessionId};`,
			{ type: QueryTypes.INSERT }
		);

		console.log(response);
		res.send(response);
	} catch (error) {
		res.status(400).send({ message: error.message });
	}

	// try {
	// 	const response = await models.orderItem.create({
	// 		orderId,
	// 		productId,
	// 		quantity,
	// 	});
	// 	res.send(response);
	// } catch (err) {
	// 	res.status(400).send({ message: err.message });
	// }
});

module.exports = router;
