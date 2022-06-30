import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SellerAbout from "../components/SellerAbout";
import SellerProductsDisplay from "../components/SellerProductsDisplay";
import { Link, useNavigate } from "react-router-dom";
import NewProductForm from "../components/NewProductForm";
import { fetchFromAPI } from "../helpers";

export default function SellerProfilePage() {
	const [storeData, setStoreData] = useState({});
	const [user, setUser] = useState({});
	const [seller, setSeller] = useState({});

	// const getUserFromLocalStorage = () => {
	// 	const user = localStorage.getItem("user")
	// 		? JSON.parse(localStorage.getItem("user"))
	// 		: {};

	// 	setUser(user);
	// 	console.log({ user });
	// 	if (user) {
	// 		getSeller(user.userId);
	// 	}
	// };

	// const getSeller = async (userId) => {
	// 	try {
	// 		const seller = await fetchFromAPI(`sellers/seller/${userId}`, {
	// 			method: "GET",
	// 		});

	// 		setSeller(seller);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	// useEffect(() => {
	// 	getUserFromLocalStorage();
	// 	getSeller();
	// }, []);

	// useEffect(() => {}, []);

	useEffect(() => {
		let user = JSON.parse(localStorage.getItem("user"));
		let userId = user.userId;
		console.log(user);
		fetch(`http://localhost:5000/sellers/seller/${userId}`)
			.then((res) => res.json())
			.then((json) => {
				// upon success, update users
				console.log("fetch worked");
				console.log(json);
				setStoreData(json);
			})
			.catch((error) => {
				// upon failure, show error message
				console.log(error);
			});
	}, []);

	const navigate = useNavigate();
	return (
		<Layout>
			<div className="row">
				<aside className="col-2">
					<div
						className="d-flex flex-column flex-shrink-0 p-6 bg-light"
						style={{ width: "280px" }}
					>
						<div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
							<svg className="bi pe-none me-2" width="40" height="32"></svg>
							<span className="fs-4">{storeData.storeName}</span>
						</div>
						<hr />
						<ul className="nav nav-pills flex-column mb-auto">
							<li>
								<div className="nav-link link-dark">
									<svg className="bi pe-none me-2" width="16" height="16"></svg>
									<Link
										to="/seller/profile/aboutus"
										className="nav-link active"
										aria-current="page"
									>
										Profile
									</Link>
								</div>
							</li>
							<li>
								<div className="nav-link link-dark">
									<svg className="bi pe-none me-2" width="16" height="16"></svg>
									<Link
										to="/seller/profile/addproduct"
										className="nav-link active"
										aria-current="page"
									>
										Add product
									</Link>
								</div>
							</li>
							<li>
								<div className="nav-link link-dark">
									<svg className="bi pe-none me-2" width="16" height="16"></svg>
									<Link
										to="/seller/profile/products"
										className="nav-link active"
										aria-current="page"
									>
										Products
									</Link>
								</div>
							</li>
						</ul>
						<hr />
					</div>
				</aside>
				<SellerAbout />
				<SellerProductsDisplay />
				<NewProductForm storeData={storeData} />
			</div>
		</Layout>
	);
}
