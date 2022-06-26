import React from "react";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	return (
		<>
			<nav className="navbar navbar-expand bg-light border-bottom ">
				<div className="container-fluid justify-content-center">
					<Link to="/" className="navbar-brand fs-3 fw-semibold px-2">
						Flora
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="collapse navbar-collapse show text-end"
						id="navbarSupportedContent"
					>
						{/*********  SEARCH BAR *******/}
						<form className="d-flex mx-auto w-50 " role="search">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button className="btn btn-outline-success" type="submit">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-search"
									viewBox="0 0 16 16"
								>
									<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
								</svg>
							</button>
						</form>
						{/********* END SEARCH BAR *******/}
						<ul className="navbar-nav mb-2 mb-lg-0 py-3 ">
							<li className="nav-item">
								<Link
									to="/signin"
									className="nav-link active"
									aria-current="page"
									href="#"
								>
									Sign in
								</Link>
							</li>
							<li className="nav-item">
								<OverlayTrigger
									delay={{ hide: 400, show: 300 }}
									overlay={(props) => <Tooltip {...props}>Favorites </Tooltip>}
									placement="bottom"
								>
									<Link
										to="/signin"
										className="nav-link active"
										aria-current="page"
										href="#"
									>
										{/* bookmark heart icon */}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="28"
											height="28"
											fill="currentColor"
											className="bi bi-bookmark-heart"
											viewBox="0 0 16 16"
										>
											<path
												fillRule="evenodd"
												d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
											/>
											<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
										</svg>
									</Link>
								</OverlayTrigger>
							</li>
							<li className="nav-item">
								<OverlayTrigger
									delay={{ hide: 400, show: 300 }}
									overlay={(props) => (
										<Tooltip {...props}>Shopping Bag </Tooltip>
									)}
									placement="bottom"
								>
									<Link
										to="/cart"
										className="nav-link active"
										aria-current="page"
										href="#"
									>
										{/* CART */}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="28"
											height="28"
											fill="currentColor"
											className="bi bi-cart4"
											viewBox="0 0 16 16"
										>
											<path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
										</svg>
									</Link>
								</OverlayTrigger>
							</li>
							{/* I AM A SELLER LINK */}
							<li className="nav-item ms-lg-5">
								<OverlayTrigger
									delay={{ hide: 400, show: 300 }}
									overlay={(props) => (
										<Tooltip {...props}>I am a seller </Tooltip>
									)}
									placement="bottom"
								>
									<Link
										// * NEEDS A CONDITION. IF LOGGED IN THIS SHOULD NAVIGATE TO PROFILE.
										to="/seller/register"
										className="nav-link active"
										aria-current="page"
										href="#"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="28"
											height="28"
											fill="currentColor"
											className="bi bi-shop-window"
											viewBox="0 0 16 16"
										>
											<path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
										</svg>
									</Link>
								</OverlayTrigger>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<header className="bg-light border-bottom py-2">
				{" "}
				Categories and Subcategories will go here
			</header>
		</>
	);
}

export default Navbar;
