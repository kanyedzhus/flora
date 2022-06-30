const express = require("express");
const router = express.Router();
const models = require("../models");
const stripeAPI = require("../StripeAPI/stripe");
const path = require("path");
// define the path to the dotenv
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

// setting up an endpoint on server that receives requests from Stripe when sth happens in account
// since the website is not live, stripe will forward events to our local server
const webhook = (req, res) => {
	// webhook signature to verify stripe generated the request
	const signature = req.headers["stripe-signature"];

	let event;
	try {
		event = stripeAPI.webhooks.constructEvent(
			req.body,
			signature,
			process.env.WEB_HOOK_SECRET
		);
	} catch (error) {
		// couldn't verify that event came from stripe
		return res.status(400).send(`⚠️ Webhook error ${error.message}`);
	}

	// if event came from stripe, this is a successful checkout on stripe. we can listen for this event
	if (event.type === "checkout.session.completed") {
		const session = event.data.object;
		// use info sent back here to send email to customer
		console.log("event data", session);

		// Following a successful checkout, post to the orders table and orders items table.
	}
};

module.exports = webhook;
