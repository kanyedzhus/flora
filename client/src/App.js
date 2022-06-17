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
