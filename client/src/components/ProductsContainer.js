import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";

export default function ProductsContainer() {
	// const { products } = useContext(ProductsContext);
	const products = [
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
		{
			productId: 2,
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
		{
			productId: 3,
			categoryId: 4,
			sellerId: 1,
			productName: "Ficus Burgundy",
			description:
				"The Ficus Burgundy, or rubber tree, is known for its glossy burgundy leaves and latex sap that was once used in rubber production! This same sap makes the Ficus elastica toxic, so the best practice is to keep it out of the reach of curious pets and small children. Give your Ficus Burgundy plenty of bright indirect light to help it retain its dramatic foliage.",
			imgURL:
				"https://images.unsplash.com/photo-1583753075968-1236ccb83c66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=754&q=80",
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
		{
			productId: 4,
			categoryId: 4,
			sellerId: 1,
			productName: "Ficus Burgundy",
			description:
				"The Ficus Burgundy, or rubber tree, is known for its glossy burgundy leaves and latex sap that was once used in rubber production! This same sap makes the Ficus elastica toxic, so the best practice is to keep it out of the reach of curious pets and small children. Give your Ficus Burgundy plenty of bright indirect light to help it retain its dramatic foliage.",
			imgURL:
				"https://images.unsplash.com/photo-1592150621744-aca64f48394a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1191&q=80",
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
		<div className="row row-cols-2 row-cols-xl-4 g-3">
			{/* map out product cards. map function should be different depending on where it's called */}
			{products.map((product) => {
				return <ProductCard product={product} />;
			})}
		</div>
	);
}
