import React, { useContext } from "react";
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
import { fetchFromAPI, isInCart } from "../helpers";

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
		light,
		easyCare,
		petFriendly,
		airPurifying,
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

	const createShoppingSession = async () => {
		if (cartItems.length === 0) {
			try {
				await fetchFromAPI("/", {
					body: {},
				});
			} catch (error) {}
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
						navigate(`/${productId}`);
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
						<div className="h3 d-flex gap-1 justify-content-center ">
							{light === "high" && <BsBrightnessHigh />}
							{light === "medium" && <BsBrightnessLow />}
							{light === "low" && <BsBrightnessAltLow />}
							{petFriendly && <IoPawOutline />}
							{airPurifying && (
								<TbWindmill strokeWidth="1.5" className="fw-light " />
							)}
							{easyCare && <BsEmojiSmile className="h4" />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
