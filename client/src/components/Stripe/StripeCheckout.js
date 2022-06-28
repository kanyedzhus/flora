import React, { useContext } from "react";
// returns a reference to the stripe instance/promise passed down in Elements wrapper in index.js. Use this to redirect to checkout
import { useStripe } from "@stripe/react-stripe-js";
import { CartContext } from "../../contexts/cart-context";
import { fetchFromAPI } from "../../helpers";

export default function StripeCheckout({
	cartTotal,
	postCartSessionTotal,

	buyer,
}) {
	const stripe = useStripe();
	const { cartItems } = useContext(CartContext);
	console.log(cartItems);

	const handleCheckout = async (event) => {
		event.preventDefault();

		const customer = "cus_LwtmAtpYHMFkWH";
		// build line items. stripe customer id above can come from user context

		try {
			const line_items = cartItems.map((item) => {
				return {
					quantity: item.quantity,
					price: item.stripePriceId,
				};
			});
			console.log(line_items);
			const stripeSession = await fetchFromAPI("create-checkout-session", {
				body: { line_items, customer },
			});
			console.log(stripeSession);
			// sessionid is returned in the response from the fetch. the fetchfromapi returns the response as json. no need to do that here
			const { sessionId } = stripeSession;
			console.log(sessionId);

			// we'll get error obj if there's an error. this destructures error from this call to the stripeapi to redirect to hosted checkout page. It will either redirect or give the error obj
			// the sessionId from the call tocreate a session is needed to redirect to the success page
			const { error } = await stripe.redirectToCheckout({ sessionId });

			if (error) {
				console.log({ error });
				// can show message to user or send to an error page.
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<button
			className="btn btn-primary"
			onClick={(event) => {
				handleCheckout(event);
				postCartSessionTotal(cartTotal, buyer.buyerId);
			}}
		>
			CHECKOUT
		</button>
	);
}
