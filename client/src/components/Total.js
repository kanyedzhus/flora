import { event } from "jquery";
import React from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "./Stripe/StripeCheckout";

export default function Total() {
	const navigate = useNavigate();
	const itemCount = 1;
	const total = 100;
	const items = itemCount === 1 ? "item" : "items";

	const handleStripeCheckout = async (event) => {
		event.preventDefault();
	};

	return (
		<div className="col-4 d-flex flex-column align-items-center ">
			<div className="p-3 text-center fw-semibold">
				<p>
					{itemCount} {items} in cart
				</p>
				<h5 className="">{`Total: $${total}`}</h5>
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
