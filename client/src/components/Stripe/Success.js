import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import { CartContext } from "../../contexts/cart-context";

export default function Success() {
	const navigate = useNavigate();
	const { clearCartFn } = useContext(CartContext);

	// clear cart if payment successful
	useEffect(() => {
		clearCartFn();
	}, []);

	const deleteSession = async () => {
		try {
		} catch (error) {}
	};

	return (
		<Layout>
			<div className="mx-auto text-center my-5">
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
