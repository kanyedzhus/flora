import React, { useEffect, useState, useContext } from "react";
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
import { fetchFromAPI } from "./helpers";
import { CartContext } from "./contexts/cart-context";

function App() {
	const { cartSession } = useContext(CartContext);
	const [user, setUser] = useState({});
	const [buyer, setBuyer] = useState({});

	const getUserFromLocalStorage = () => {
		const user = localStorage.getItem("user")
			? JSON.parse(localStorage.getItem("user"))
			: {};

		setUser(user);
		console.log({ user });
		if (user) {
			getBuyer(user.userId);
		}
	};

	const getBuyer = async (userId) => {
		try {
			const buyer = await fetchFromAPI(`users/buyer/${userId}`, {
				method: "GET",
			});
			setBuyer(buyer);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUserFromLocalStorage();
	}, []);

	console.log({ buyer });
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
				<Route path="/:productId" element={<SingleProductPage />} />
				<Route path="/signin" element={<SignInPage />} />
				<Route path="/register" element={<BuyerRegistrationPage />} />
				<Route path="/seller/register" element={<SellerRegistrationPage />} />
				<Route path="/seller/profile" element={<SellerProfile />} />
				<Route path="/cart" element={<CartPage buyer={buyer} />} />
				{/* any route not declared here will lead to the NotFound page */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
