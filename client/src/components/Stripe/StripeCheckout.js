import React, { useContext } from "react";
// returns a reference to the stripe instance/promise passed down in Elements wrapper in index.js. Use this to redirect to checkout
import { useStripe } from "@stripe/react-stripe-js";
import { CartContext } from "../../contexts/cart-context";

export default function StripeCheckout() {
	return <div>StripeCheckout</div>;
}
