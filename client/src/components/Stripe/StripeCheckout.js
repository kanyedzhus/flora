import React, { useContext, useEffect, useState } from "react";
// returns a reference to the stripe instance/promise passed down in Elements wrapper in index.js. Use this to redirect to checkout
import { useStripe } from "@stripe/react-stripe-js";
import { CartContext } from "../../contexts/cart-context";
import { fetchFromAPI } from "../../helpers";

export default function StripeCheckout({
	cartTotal,

	buyer,
}) {
	const stripe = useStripe();
	const [cartItemIds, setCartItemIds] = useState([]);
	const { cartItems } = useContext(CartContext);
	console.log(cartItems);

	const { cartSession } = useContext(CartContext);
	console.log({ cartSession });

	const handleCheckout = async (event) => {
		event.preventDefault();

		const customer = buyer.stripeId;
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

	console.log({ cartTotal }, { buyer });

	const postCartSessionTotal = async (cartTotal, cartSessionId) => {
		try {
			await fetchFromAPI(`cartsessions/total/${cartSessionId}/edit`, {
				method: "PUT",
				body: { total: cartTotal },
			});
		} catch (error) {
			console.log(error);
		}
	};
	const getCartItemIds = (carItems) => {
		const ids = cartItems.map((item) => item.cartItemId);
		console.log(ids);
		setCartItemIds(ids);
	};
	useEffect(() => {
		getCartItemIds();
		console.log({ cartItemIds });
	}, []);
	const attachCartSessionToItems = async (cartItemIds) => {
		try {
			await fetchFromAPI("cartitems/cartsession/edit", {
				method: "PUT",
				body: { cartItemIds, cartSession },
			});
		} catch (error) {}
	};

	return (
		<>
			<button
				className="btn btn-primary"
				onClick={(event) => {
					handleCheckout(event);
					postCartSessionTotal(cartTotal, cartSession.cartSessionId);
					attachCartSessionToItems(cartItemIds);
				}}
			>
				CHECKOUT
			</button>
		</>
	);
}
