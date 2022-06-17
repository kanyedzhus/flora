import React from "react";
import Footer from "./Footer";
// NavBar impport needed here. Use this component whereever we need the header and footer

export default function Layout({ children }) {
	return (
		<>
			{/* <Header /> */}
			<main>{children}</main>
			<Footer />
		</>
	);
}
