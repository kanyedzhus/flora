import React from "react";
import { useNavigate } from "react-router-dom";

// accept extra elements that don't always appear
export default function ProductCard({ extras, product }) {
	const { productId, imgURL, productName, price, quantity, sellerId } = product;
	const navigate = useNavigate();
	return (
		<div className="">
			<div
				className="card shadow-sm  "
				style={{ cursor: "pointer" }}
				onClick={() => {
					// this navigates to the singleProduct view. here the id that will be found in the url and used in the singleProduct component is set
					// must set the / infront of the path or else this path will be appended to existing one.
					navigate(`/product/${productId}`);
				}}
			>
				<img src={imgURL} className="card-img-top h-50" alt="..." />
				<div className="card-body h-100">
					<h5 className="card-title">{productName}</h5>
					{extras}
					<h5>€ {price}</h5>
					<p className="card-text">
						Some quick example text to build on the card title and make up the
						bulk of the card's content.
					</p>
					<div className="d-flex justify-content-between align-items-center">
						<a href="#" className="btn btn-primary">
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
