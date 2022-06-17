import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import CartContextProvider from "./contexts/cart-context";
import ProductsContextProvider from "./contexts/products-context";

// this allows us to make stripe context down to children. works with hooks
import { Elements } from "@stripe/react-stripe-js";

// helper function to load stripe js
import { loadStripe } from "@stripe/stripe-js";

// accepts a publishable key and returns a promise
const stripePromise = loadStripe(
	"pk_test_51LAYVvGbLCDl0eiJEzT9xpggaROyBJ0LwQJ2Mh9902UyAE1IoYfPQdzczFYQkF17nKp99WXHqvgDAYnLwrL3yiC000AywInfzE"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ProductsContextProvider>
				<CartContextProvider>
					<Elements stripe={stripePromise}>
						<App />
					</Elements>
				</CartContextProvider>
			</ProductsContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
