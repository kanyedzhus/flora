const express = require("express");
const router = express.Router();
const models = require("../models");

//Get cart session by id
// /cartsessions/:cartSessionId
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
// /cartsessions/buyer/:buyerId
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
// /cartsessions
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

//* Edit total - /cartsessions/total/:cartSessionId/edit
router.put("/total/:cartSessionId/edit", async (req, res) => {
	const { total } = req.body;
	const { cartSessionId } = req.params;
	try {
		const response = await models.cartSession.findOne({
			where: { cartSessionId },
			attributes: ["cartSessionId", "buyerId", "total"],
		});
		console.log(req.body);
		const data = await response.update({ total });
		console.log(data);
		res.send(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

//Delete cart session
// cartsession/:cartSessionId/delete
router.delete("/:cartSessionId/delete", async (req, res) => {
	const { cartSessionId } = req.params;

	try {
		const data = await models.cartSession.destroy({ where: { cartSessionId } });
		res.status(200).json(data);
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;
