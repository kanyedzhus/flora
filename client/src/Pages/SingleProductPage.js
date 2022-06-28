import React, { useEffect, useState, useContext } from "react";
import Layout from "../components/Layout";
import { useParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { ProductsContext } from "../contexts/products-context";

export default function SingleProductView() {
	const { products } = useContext(ProductsContext);
	const navigate = useNavigate();
	// this will come out as a string
	const { productId } = useParams();

	const [product, setProduct] = useState(null);

	// on load check if the product id from params is found in the products list.
	useEffect(() => {
		// use the id from the URL to find the product in products.
		const selectedProduct = products.find((product) => {
			console.log(product.productId, Number(productId));
			// turn productId string to number
			return product.productId === Number(productId);
		});
		// if product does not exist redirect to home page
		if (!selectedProduct) {
			navigate("/");
		}

		setProduct(selectedProduct);
		console.log(selectedProduct);
	}, []);

	// handling the case where product is null right when component loads for first time.
	if (!product) {
		return null;
	}
	// this needs to be the last thing executed
	// const { imageUrl, title, price, description } = product;

	return (
		<Layout>
			<div className="container w-50 h-50 my-5">
				<ProductCard
					product={product}
					extras={<p>Sold by {product.sellerId}</p>}
				/>
			</div>
		</Layout>
	);
}
