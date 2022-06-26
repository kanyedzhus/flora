import React, { useContext } from "react";
// returns a reference to the stripe instance/promise passed down in Elements wrapper in index.js. Use this to redirect to checkout
import { useStripe } from "@stripe/react-stripe-js";
import { CartContext } from "../../contexts/cart-context";

const handleCheckout = async (event) => {
	event.preventDefault();
	// build line items

	const stripeSession = await fetchFromAPI("create-checkout-session", {
		body: { line_items, stripePriceId },
	});

	// sessionid is returned in the response from the fetch. the fetchfromapi returns the response as json. no need to do that here
	const { sessionId } = stripeSession;

	// we'll get error obj if there's an error. this destructures error from this call to the stripeapi to redirect to hosted checkout page. It will either redirect or give the error obj
	// the sessionId from the call tocreate a session is needed to redirect to the success page
	const { error } = await stripe.redirectToCheckout({ sessionId });

	if (error) {
		console.log({ error });
		// can show message to user or send to an error page.
	}
};

export default function StripeCheckout() {
	const stripe = useStripe();
	return <div>StripeCheckout</div>;
}
