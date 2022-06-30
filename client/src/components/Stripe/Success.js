import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import { CartContext } from "../../contexts/cart-context";
import { fetchFromAPI } from "../../helpers";

export default function Success({ buyer }) {
	const navigate = useNavigate();
	const { clearCartFn, cartSession } = useContext(CartContext);

	const [buyerOrder, setBuyerOrder] = useState();

	const deleteCartSession = async () => {
		try {
			const response = await fetchFromAPI(
				`cartsessions/${cartSession.cartSessionId}/delete`,
				{ method: "DELETE" }
			);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
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

	// get orderid of buyer
	const getBuyerOrder = async () => {
		try {
			const response = await fetchFromAPI(`orders/order/${buyer.buyerId}`, {
				method: "GET",
			});
			setBuyerOrder(response.buyerId);
		} catch (error) {
			console.log(error);
		}
	};

	const putOrderId = async () => {
		try {
			const response = await fetchFromAPI(
				`orderitems/put/${cartSession.cartSessionId}`,
				{
					method: "PUT",
					body: { orderId: buyer.orderId },
				}
			);

			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};
	// insert into orderitems (orderId, productId, quantity, price, createdAt, updatedAt) select(select orderId from orders where buyerId=6) as orderId, productId, quantity, price, now(), now() from cartitems where cartSessionId=29;

	useEffect(() => {
		postToOrders(cartSession.cartSessionId);
		postToOrderItems(cartSession.cartSessionId);
		// clear cart if payment successful

		clearCartFn();

		deleteCartSession();
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
					<button
						className="btn btn-outline-success"
						onClick={() => navigate("/")}
					>
						Continue Shopping
					</button>
				</div>
			</div>
		</Layout>
	);
}
