import React from "react";
import FilterUI from "../components/FilterUI";
import SearchProductsContainer from "../components/SearchProductContainer";

import Layout from "../components/Layout";

export default function SearchPage() {
	return (
		<Layout>
			<div className="container my-3">
				<div className="row">
					<FilterUI />
					<SearchProductsContainer />
				</div>
			</div>
		</Layout>
	);
}
