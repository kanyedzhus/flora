const express = require("express");
const router = express.Router();
const models = require("../models");

//Get cart item by cart session id
// /cartitems/:cartSessionId
router.get("/items/:cartSessionId", async (req, res) => {
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

// get all cart items with price from products table
//cartitems/all-items
router.get("/all-items", async (req, res) => {
	try {
		const cartItems = await models.cartItem.findAll({
			attributes: [
				"cartItemId",
				"cartSessionId",
				"productId",
				"price",
				"stripePriceId",
				"quantity",
				"createdAt",
				"updatedAt",
			],
		});

		res.send(cartItems);
	} catch (error) {}
});

//Post cart Item - ADD ITEM TO CARTITEMS TABLE
// /cartitems/item
router.post("/item", async (req, res) => {
	const { cartSessionId, productId, price, quantity, stripePriceId } = req.body;

	try {
		// how to get the cartsession id?
		const cartItem = await models.cartItem.create({
			cartSessionId,
			productId,
			price,
			stripePriceId,
			quantity,
		});

		// make a second call to get the stripe price and prod id of the prod in the cart
		const stripeIds = await models.product.findOne({
			attributes: ["stripeProductId", "stripePriceId"],
			where: { productId },
		});

		res.status(200).send({ cartItem, stripeIds });
	} catch (error) {
		res.status(500).send(error);
	}
});

//Put (edit) cart item (quantity only) by id
// /cartitems/item/:cartItemId/edit
router.put("/item/:cartItemId/edit", async (req, res) => {
	const { cartItemId } = req.params;
	const { quantity } = req.body;
	console.log(req.body);
	try {
		const response = await models.cartItem.findOne({
			where: { cartItemId },
			attributes: [
				"cartItemId",
				"cartSessionId",
				"productId",
				"price",
				"stripePriceId",
				"quantity",
				"createdAt",
				"updatedAt",
			],
		});
		console.log(quantity);
		const data = await response.update({ quantity });

		res.send(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

//Delete cart item by id
// cartsitems/:cartItemId/delete
router.delete("/item/:cartItemId/delete", async (req, res) => {
	const { cartItemId } = req.params;
	try {
		models.cartItem
			.destroy({ where: { cartItemId } })
			.then((data) => res.status(200).json(data));
	} catch (error) {
		res.status(500).send(error);
	}
});

// delete all in cart
router.delete("/delete-all", (req, res) => {
	try {
		models.cartItem
			.destroy({ where: {}, truncate: true })
			.then((data) => res.status(200).json(data));
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;
