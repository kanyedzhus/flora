import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import { CartContext } from "../../contexts/cart-context";

export default function Success() {
	const navigate = useNavigate();
	const { clearCart } = useContext(CartContext);

	// clear cart if payment successful
	useEffect(() => {
		clearCart();
	}, []);

	return (
		<Layout>
			<div className="mx-auto text-center">
				<h1>Thank you for your order</h1>
				<p>
					We are currently processing your order and will send you a
					confirmation email shortly
				</p>
				<div>
					<button className="btn btn-primary" onClick={() => navigate("/")}>
						Continue Shopping
					</button>
				</div>
			</div>
		</Layout>
	);
}
