import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import HomeDisplay from "./components/HomeDisplay/HomeDisplay";
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

function App() {
	return (
		<div className="App">
			<Routes>
				<Route exact path="/" element={<HomePage />} />
				<Route path="/success" element={<Success />} />
				<Route path="/canceled" element={<Canceled />} />
			</Routes>
		</div>
	);
}

export default App;
