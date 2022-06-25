import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Featured from "../components/Featured";

export default function HomePage() {
	return (
		<div>
			<Layout>
				<Hero />
				<Featured />
			</Layout>
		</div>
	);
}
