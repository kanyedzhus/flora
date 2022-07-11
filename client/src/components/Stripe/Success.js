import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";
import { CartContext } from "../../contexts/cart-context";
import { fetchFromAPI } from "../../helpers";

export default function Success({ buyer }) {
	const navigate = useNavigate();
	const { clearCartFn, cartSession, getCartSessionFn } =
		useContext(CartContext);

	const [buyerOrderId, setBuyerOrderId] = useState();

	useEffect(() => {
		getCartSessionFn(buyer.buyerId);
	}, []);

	// copy from cartsession table - total and buyerid
	const postToOrders = async () => {
		try {
			const response = await fetchFromAPI(
				`orders/post/${cartSession.cartSessionId}`
			);
			console.log("post to orders done", response);
		} catch (error) {
			console.log(error);
		}
	};

	const postToOrderItems = async () => {
		try {
			const response = await fetchFromAPI(
				`orderitems/post/${cartSession.cartSessionId}`
			);
			console.log("post to orderitems done", response);
		} catch (error) {
			console.log(error);
		}
	};
	// get the orderid of the buyer from order just created
	const getOrderIdOfBuyer = async () => {
		try {
			const response = await fetchFromAPI(
				`orders/order/${buyer.buyerId}/most-recent`,
				{
					method: "GET",
				}
			);
			console.log("from getOrderIdOfBuyer", response);
			setBuyerOrderId(response.orderId);
		} catch (error) {
			console.log(error);
		}
	};

	const attachOrderToOrderItems = async () => {
		try {
			const response = await fetchFromAPI(
				`orderitems/put/${cartSession.cartSessionId}`,
				{
					method: "PUT",
					body: { orderId: buyerOrderId },
				}
			);

			console.log("from attachOrderToOrderItems", response);
		} catch (error) {
			console.log(error);
		}
	};
	// insert into orderitems (orderId, productId, quantity, price, createdAt, updatedAt) select(select orderId from orders where buyerId=6) as orderId, productId, quantity, price, now(), now() from cartitems where cartSessionId=29;

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

	useEffect(() => {
		postToOrders(cartSession.cartSessionId);
		postToOrderItems(cartSession.cartSessionId);
		getOrderIdOfBuyer();
		attachOrderToOrderItems();
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
