import React from "react";
import FilterUI from "../components/FilterUI";
import ProductsContainer from "../components/ProductsContainer";
import ProductCard from "../components/ProductCard";
import Layout from "../components/Layout";

export default function SearchPage() {
	return (
		<Layout>
			<FilterUI />
			<ProductsContainer />
			<ProductCard />
		</Layout>
	);
}
