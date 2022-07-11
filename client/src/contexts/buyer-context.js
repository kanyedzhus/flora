import React, { createContext, useState, useEffect } from "react";
import { fetchFromAPI } from "../helpers";

export const BuyerContext = createContext();

export default function BuyerContextProvider({ children }) {
	const [user, setUser] = useState({});
	const [buyer, setBuyer] = useState({});

	useEffect(() => {
		getUserFromLocalStorage();
	}, []);

	useEffect(() => {
		getBuyer(user.userId);
	}, [user]);

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

	console.log({ buyer }, { user });

	const value = { getBuyerFn: getBuyer, buyer, user };

	return (
		<BuyerContext.Provider value={value}>{children}</BuyerContext.Provider>
	);
}
