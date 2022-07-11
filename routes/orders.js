const express = require("express");
const router = express.Router();
const models = require("../models");
const { QueryTypes } = require("sequelize");
const { sequelize } = require("../models");

//Get all orders
// /orders
router.get("/", async (req, res) => {
	try {
		const response = await models.order.findAll({
			attributes: ["orderId", "buyerId", "status", "createdAt"],
		});
		res.send(response);
	} catch (err) {
		res.status(400).send({ message: err.message });
	}
});

//Get orders by id
// /orders/orderId
router.get("/:orderId", (req, res) => {
	const { orderId } = req.params;
	console.log(orderId);

	models.order
		.findOne({
			attributes: ["orderId", "buyerId", "status", "createdAt"],
			where: { orderId },
		})
		.then((seller) => res.send(seller))
		.catch((err) => res.status(500).send({ error: err.message }));
});

//Get most recent order of a specific buyer
// orders/order/:buyerId
router.get("/order/:buyerId/most-recent", async (req, res) => {
	const { buyerId } = req.params;
	try {
		const response = await models.order.findOne({
			where: {
				buyerId,
			},
			order: [["createdAt", "DESC"]],
			attributes: ["orderId", "buyerId", "status", "createdAt"],
		});
		res.send(response);
	} catch (err) {
		res.status(400).send({ message: err.message });
	}
});

//Post an order by cartsession id. copy cartsession total and buyerId
// /orders
router.post("/post/:cartSessionId", async (req, res) => {
	const { cartSessionId } = req.params;
	//console.log(buyerId);
	try {
		const response = await sequelize.query(
			`insert into orders (buyerId, total, createdAt, updatedAt) select buyerId, total, now(), now() from cartsessions where cartSessionId=${cartSessionId}`,
			{
				type: QueryTypes.INSERT,
			}
		);
		console.log(response);
		res.send(response);
	} catch (error) {
		// console.log(error);
		res.status(500).send(error);
	}
});

//Put (edit) order status by order Id
// /orders/:orderId
router.put("/:orderId", async (req, res) => {
	const { orderId } = req.params;
	const { status } = req.body;
	//console.log(orderId, status)
	try {
		const response = await models.order.findOne({
			where: { orderId },
			attributes: ["orderId", "buyerId", "status", "total", "createdAt"],
		});
		//console.log(response)

		const data = await response.update({ status });
		console.log(data);
		res.send(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;
