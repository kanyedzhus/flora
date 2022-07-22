import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { CartContext } from "../contexts/cart-context";
import {
	BsBrightnessHigh,
	BsBrightnessLow,
	BsBrightnessAltLow,
	BsEmojiSmile,
} from "react-icons/bs";
import { IoPawOutline } from "react-icons/io5";
import { TbWindmill } from "react-icons/tb";
import { fetchFromAPI } from "../helpers";

// accept extra elements that don't always appear
export default function ProductCard({ extras, product }) {
	const { addToCartFn, cartItems, cartTotal } = useContext(CartContext);
//	console.log({ cartItems }, { cartTotal });
	// *PRODUCT.QUANTITY IS THE STOCK **NOT** QUANTITY IN CART TO PURCHASE
	const {
		productId,
		imgURL,
		productName,
		description,
		price,
		sellerId,
		light,
		easyCare,
		petFriendly,
		airPurifying,
		stripePriceId,
	} = product;

	const navigate = useNavigate();

	// const cartSessionId = cartSession?.cartSessionId;
	// console.log({ cartSessionId });
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
			<div
				className="card shadow-sm h-100 "
				style={{ cursor: "pointer", height: "78vh" }}
			>
				<img
					src={imgURL}
					className="card-img-top"
					style={{ objectFit: "cover", height: "35vh", width: "100%" }}
					alt="..."
					onClick={() => {
						// this navigates to the singleProduct view. here the id that will be found in the url and used in the singleProduct component is set
						// must set the / infront of the path or else this path will be appended to existing one.
						navigate(`/${productId}`);
					}}
				/>
				<div className="card-body h-100">
					<h5 className="card-title">{productName}</h5>
					{extras}
					<h5>€ {price}</h5>
					<p className="card-text">{description}</p>
					<div className="d-flex justify-content-between align-items-center">
						{/* check for item in cart */}
						{cartItems.find((item) => item.productId === productId) ? (
							<button
								className="btn btn-outline-primary"
								onClick={() => navigate("/cart")}
							>
								View In Cart
							</button>
						) : (
							<button
								className="btn btn-primary mt-auto"
								onClick={(event) => {
									event.preventDefault();

									handleAddToCart(productId, price, stripePriceId);
								}}
							>
								Add to cart
							</button>
						)}
						<div className="h4 d-flex gap-1 justify-content-center ">
							{light === "high" ? <BsBrightnessHigh /> : ""}
							{light === "medium" ? <BsBrightnessLow /> : ""}
							{light === "low" ? <BsBrightnessAltLow /> : ""}
							{petFriendly ? <IoPawOutline /> : ""}
							{airPurifying ? (
								<TbWindmill strokeWidth="1.5" className="fw-light " />
							) : (
								""
							)}
							{easyCare ? <BsEmojiSmile className="h5" /> : ""}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
