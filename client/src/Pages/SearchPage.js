import React from "react";
import FilterUI from "../components/FilterUI";
import ProductsContainer from "../components/ProductsContainer";

import Layout from "../components/Layout";

export default function SearchPage() {
	return (
		<Layout>
			<div className="container my-3">
				<div className="row">
					<FilterUI />
					<ProductsContainer />
				</div>
			</div>
		</Layout>
	);
}
