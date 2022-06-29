import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import { CartContext } from "../../contexts/cart-context";
import { fetchFromAPI } from "../../helpers";

export default function Success() {
	const navigate = useNavigate();
	const { clearCartFn, cartSession } = useContext(CartContext);
	const deleteCartSession = async () => {
		try {
		} catch (error) {}
	};
	const postToOrderItems = async () => {
		try {
			const response = await fetchFromAPI(
				`orderitems/post/${cartSession.cartSessionId}`
			);
		} catch (error) {
			console.log(error);
		}
	};

	const postToOrders = async () => {
		try {
			const response = await fetchFromAPI(
				`orders/post/${cartSession.cartSessionId}`
			);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		postToOrders(cartSession.cartSessionId);
		// clear cart if payment successful
		postToOrderItems(cartSession.cartSessionId);
		// clearCartFn();
		console.log(cartSession);
	}, []);

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
