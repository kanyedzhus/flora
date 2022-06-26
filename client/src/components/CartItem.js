import React, { useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import { ProductsContext } from "../contexts/products-context";

export default function CartItem({ item, increaseQtyFn }) {
	const { cartItemId, productId, price, quantity, sellerId } = item;
	const { products } = useContext(ProductsContext);
	// if (!products) {
	// 	products = [];
	// }
	const productInCart = products.find(
		(product) => product.productId === productId
	);
	console.log(productInCart);

	return (
		<div className=" border ">
			<div className="row justify-content-center p-3">
				<div className="col-3 ">
					{" "}
					<img
						className=""
						style={{ objectFit: "contain", height: "15vh", width: "100%" }}
						src={productInCart.imgURL}
						alt="product"
					/>
				</div>

				<div className="col-auto">
					<h4>{productInCart.productName}</h4>
					<p className="mb-0">${price}</p>
					<p className="mb-0">{`Quantity: ${quantity}`}</p>
					<p className="mb-0">{`Sold by ${productInCart.sellerId}`}</p>
				</div>

				<div className="col-auto d-flex flex-sm-column flex-md-row align-items-center gap-1">
					<button
						className="btn btn-outline"
						onClick={() => increaseQtyFn(cartItemId)}
					>
						<AiOutlinePlus />
					</button>

					<button
						className="btn btn-outline"
						// onClick={() => decrease(product)}
					>
						<AiOutlineMinus />
					</button>

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
