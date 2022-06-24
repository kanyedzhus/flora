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
import BuyerRegistrationPage from "./Pages/BuyerRegistrationPage";
import CartPage from "./Pages/CartPage";
import SellerProfile from "./components/SellerProfile";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SingleProductPage from "./Pages/SingleProductPage";

function App() {
	return (
		<div className="App">
			{" "}
			<ToastContainer
				position="top-center"
				transition={Slide}
				autoClose={2500}
			/>
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/success" element={<Success />} />
				<Route path="/canceled" element={<Canceled />} />
				<Route path="/search" element={<SearchPage />} />
				<Route path="/product/:productId" element={<SingleProductPage />} />
				<Route path="/signin" element={<SignInPage />} />
				<Route path="/register" element={<BuyerRegistrationPage />} />
				<Route path="/seller/register" element={<SellerRegistrationPage />} />
				<Route path="/seller/profile" element={<SellerProfile />} />
				<Route path="/cart" element={<CartPage />} />
				{/* any route not declared here will lead to the NotFound page */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
