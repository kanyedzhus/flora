import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { CartContext } from "../contexts/cart-context";

// accept extra elements that don't always appear
export default function ProductCard({ extras, product }) {
	const { addToCartFn, cartItems } = useContext(CartContext);
	console.log(cartItems);
	// *PRODUCT.QUANTITY IS THE STOCK **NOT** QUANTITY IN CART TO PURCHASE
	const {
		productId,
		imgURL,
		productName,
		description,
		price,
		sellerId,
		stripePriceId,
	} = product;

	const navigate = useNavigate();

	const handleAddToCart = (productId, price, stripePriceId) => {
		// check if item is already in cart
		if (!cartItems.find((item) => item.productId === productId)) {
			addToCartFn(productId, price, stripePriceId);
		} else {
			toast.info("This item is already in your cart.");
		}
	};

	return (
		<div className="col">
			<div className="card shadow-sm  " style={{ cursor: "pointer" }}>
				<img
					src={imgURL}
					className="card-img-top"
					style={{ objectFit: "cover", height: "35vh", width: "100%" }}
					alt="..."
					onClick={() => {
						// this navigates to the singleProduct view. here the id that will be found in the url and used in the singleProduct component is set
						// must set the / infront of the path or else this path will be appended to existing one.
						navigate(`/product/${productId}`);
					}}
				/>
				<div className="card-body h-100">
					<h5 className="card-title">{productName}</h5>
					{extras}
					<h5>€ {price}</h5>
					<p className="card-text">{description}</p>
					<div className="d-flex justify-content-between align-items-center">
						<a
							href="#"
							className="btn btn-primary"
							onClick={(event) => {
								event.preventDefault();
								handleAddToCart(productId, price, stripePriceId);
							}}
						>
							Add to cart
						</a>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							fill="currentColor"
							className="bi bi-brightness-alt-high"
							viewBox="0 0 16 16"
						>
							<path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4zm0 1a3 3 0 0 1 2.959 2.5H5.04A3 3 0 0 1 8 8z" />
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}
