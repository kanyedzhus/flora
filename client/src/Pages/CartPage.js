import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import Layout from "../components/Layout";
import Total from "../components/Total";
import { CartContext } from "../contexts/cart-context";

export default function CartPage() {
	const {
		cartItems,
		increaseQtyFn,
		decreaseQtyFn,
		removeFromCartFn,
		clearCartFn,
		updateTotalFn,
		cartTotal,
	} = useContext(CartContext);
	console.log(cartItems);
	return (
		<Layout>
			<div className="p-3">
				<h1 className="text-center ">Cart</h1>

				{cartItems.length === 0 ? (
					<div className="text-center ">
						<h4>Your Cart is Empty.</h4>
					</div>
				) : (
					<div className="container-lg ">
						<div className="row justify-content-center">
							<div className="col-8">
								{cartItems.map((item) => (
									<CartItem
										item={item}
										increaseQtyFn={increaseQtyFn}
										decreaseQtyFn={decreaseQtyFn}
										removeFromCartFn={removeFromCartFn}
										key={item.cartItemId}
									/>
								))}
							</div>
							<Total
								updateTotalFn={updateTotalFn}
								cartItems={cartItems}
								clearCartFn={clearCartFn}
								cartTotal={cartTotal}
							/>
						</div>
					</div>
				)}
			</div>
		</Layout>
	);
}
