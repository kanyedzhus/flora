import React from "react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
export default function CartItem({ product }) {
	const { imgURL, productName, price, quantity, sellerId } = product;
	return (
		<div className=" border ">
			<div className="row p-3">
				<div className="col-3 ">
					{" "}
					<img className="img-fluid " src={imgURL} alt="product" />
				</div>

				<div className="col-5">
					<h4>{productName}</h4>
					<p className="mb-0">${price}</p>
					<p className="mb-0 mt-5">{`Quantity: ${quantity}`}</p>
					<p className="mb-0">{`Sold by ${sellerId}`}</p>
				</div>

				<div className="col d-flex align-items-center">
					<button
						className="btn btn-outline"
						// onClick={() =>  increase(product)}
					>
						<AiOutlinePlus />
					</button>

					{quantity > 1 && (
						<button
							className="btn btn-outline"
							// onClick={() => decrease(product)}
						>
							<AiOutlineMinus />
						</button>
					)}

					<button
						className="btn btn-outline"
						onClick={() => {
							// removeProduct(product);
						}}
					>
						<AiOutlineDelete />
					</button>
				</div>
			</div>
		</div>
	);
}
