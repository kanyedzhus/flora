import React, { useContext } from "react";
import { CartContext } from "../contexts/cart-context";
import StripeCheckout from "./Stripe/StripeCheckout";

export default function Total() {
	const { cartItems } = useContext(CartContext);
	const items = cartItems.length === 1 ? "item" : "items";
	const handleStripeCheckout = async (event) => {
		event.preventDefault();
	};

	return (
		<div className="col-4 d-flex flex-column align-items-center ">
			<div className="p-3 text-center fw-semibold">
				<p>
					{cartItems.length} {items} in your cart
				</p>
				<h5 className="">{`Total: $${"total"}`}</h5>
			</div>
			<div className="d-flex gap-3">
				<StripeCheckout />
				<button
					className="btn btn-outline"
					// onClick={() => {
					// 	clearCart();
					// }}
				>
					CLEAR
				</button>
			</div>
		</div>
	);
}
