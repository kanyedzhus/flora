import React from "react";
import CartItem from "../components/CartItem";
import Layout from "../components/Layout";
import Total from "../components/Total";

export default function CartPage() {
	const cartItems = [
		{
			productId: 1,
			categoryId: 4,
			sellerId: 1,
			productName: "Ficus Burgundy",
			description:
				"The Ficus Burgundy, or rubber tree, is known for its glossy burgundy leaves and latex sap that was once used in rubber production! This same sap makes the Ficus elastica toxic, so the best practice is to keep it out of the reach of curious pets and small children. Give your Ficus Burgundy plenty of bright indirect light to help it retain its dramatic foliage.",
			imgURL:
				"https://images.unsplash.com/photo-1584589167171-541ce45f1eea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBsYW50fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
			price: 100.0,
			quantity: 5,
			easyCare: true,
			light: "Bright Direct",
			petFriendly: false,
			airPurifying: false,
			stripePriceId: "001",
			stripeProductId: "001",
			createdAt: "2022-01-17",
			updatedAt: "2022-06-17",
		},
	];

	return (
		<Layout>
			<div className="p-3">
				<h1 className="text-center ">Cart</h1>
				{/* check to see if cart is empty. */}( false
				<div className="text-center ">
					<h4>Your Cart is Empty.</h4>
				</div>
				) : (
				<div className="container-lg ">
					<div className="row justify-content-center">
						<div className="col-8">
							{cartItems.map((product) => (
								<CartItem
									product={product}
									// increase={increase}
									// decrease={decrease}
									// removeProduct={removeProduct}
									key={product.productId}
								/>
							))}
						</div>
						<Total
						// itemCount={itemCount}
						// total={total}
						// clearCart={clearCart}
						/>
					</div>
				</div>
				)
			</div>
		</Layout>
	);
}
