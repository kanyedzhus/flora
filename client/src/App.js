import React from "react";
import "./App.css";
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Canceled from "./components/Stripe/Canceled";
import Success from "./components/Stripe/Success";
import SearchPage from "./Pages/SearchPage";
import NotFound from "./Pages/NotFound";
import SignInPage from "./Pages/SignInPage";
import SellerRegistrationPage from "./Pages/SellerRegistrationPage";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/success" element={<Success />} />
				<Route path="/canceled" element={<Canceled />} />
				<Route path="/search" element={<SearchPage />} />
				<Route path="/signin" element={<SignInPage />} />
				<Route path="/register" element={<BuyerRegistrationPage />} />
				<Route path="/seller/register" element={<SellerRegistrationPage />} />
				{/* any route not declared here will lead to the NotFound page */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
