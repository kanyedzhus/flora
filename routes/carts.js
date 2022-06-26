const express = require("express");
const router = express.Router();
const models = require("../models");

//Get cart session by id
// /carts/:cartSessionId
router.get("/:cartSessionId", async (req, res) => {
	const { cartSessionId } = req.params;
	try {
		const response = await models.cartSession.findOne({
			where: { cartSessionId },
			attributes: ["cartSessionId", "total", "buyerId", "createdAt"],
		});
		res.send(response);
	} catch (err) {
		res.status(400).send({ message: err.message });
	}
});

//Get cart session by buyerId
// /carts/buyer/:buyerId
router.get("/buyer/:buyerId", async (req, res) => {
	const { buyerId } = req.params;
	try {
		const response = await models.cartSession.findOne({
			where: { buyerId },
			attributes: ["cartSessionId", "total", "buyerId", "createdAt"],
		});
		res.send(response);
	} catch (err) {
		res.status(400).send({ message: err.message });
	}
});

//Post cart session
// /carts
router.post("/", async (req, res) => {
	const { total, buyerId } = req.body;
	try {
		const session = await models.cartSession.create({ total, buyerId });

		// make a second call to the db to get the stripe customer id
		const stripeCustomerId = await models.buyer.findOne({
			attributes: ["stripeId"],
			where: { buyerId },
		});

		res.send({ session, stripeCustomerId });
	} catch (error) {
		res.status(500).send(error);
	}
});

//Get cart item by cart session id
// /carts/items/:cartSessionId
router.get("/item/:cartSessionId", async (req, res) => {
	const { cartSessionId } = req.params;
	try {
		const response = await models.cartItem.findAll({
			where: { cartSessionId },
			attributes: ["cartSessionId", "productId", "quantity", "createdAt"],
		});
		res.send(response);
	} catch (err) {
		res.status(400).send({ message: err.message });
	}
});

//Post cart Item
// /carts/item
router.post("/item", async (req, res) => {
	const { cartSessionId, productId, quantity } = req.body;

	try {
		const cartItem = await models.cartItem.create({
			cartSessionId,
			productId,
			quantity,
		});

		// make a second call to get the stripe price and prod id of the prod in the cart
		const stripeIds = await models.product.findOne({
			attributes: ["stripeProductId", "stripePriceId"],
			where: { productId },
		});
		res.send({ cartItem, stripeIds });
	} catch (error) {
		res.status(500).send(error);
	}
});

//Put (edit) cart item by quantity
// /carts/items/:cartItemId
router.put("/item/:cartItemId", async (req, res) => {
	const { cartItemId } = req.params;

	try {
		const response = await models.cartItem.findOne({
			where: { cartItemId },
			attributes: [
				"cartItemId",
				"cartSessionId",
				"productId",
				"quantity",
				"createdAt",
				"updatedAt",
			],
		});
		console.log(response);

		const { quantity } = req.body;
		const data = await response.update({ quantity });

		res.send(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

//Delete cart item by id
// carts/item/:cartItemId
router.delete("/item/:cartItemId", (req, res) => {
	const { cartItemId } = req.params;

	models.cartItem
		.destroy({ where: { cartItemId } })
		.then((data) => res.status(200).json(data))

		.catch((error) => {
			res.status(500).send(error);
		});
});

//Delete cart session
// carts/:cartSessionId
router.delete("/:cartSessionId", async (req, res) => {
	const { cartSessionId } = req.params;

	try {
		const data = await models.cartSession.destroy({ where: { cartSessionId } });
		res.status(200).json(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;
