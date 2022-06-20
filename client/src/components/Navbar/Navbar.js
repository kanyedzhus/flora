import React from "react";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

function Navbar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-light border-bottom">
				<div className="container-fluid">
					<a className="navbar-brand fs-3 fw-semibold" href="#">
						Flora
					</a>
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

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						{/*********  SEARCH BAR *******/}
						<form className="d-flex mx-auto w-25" role="search">
							<input
								className="form-control me-2"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<button className="btn btn-outline-success" type="submit">
								Search
							</button>
						</form>
						{/********* END SEARCH BAR *******/}
						<ul className="navbar-nav mb-2  mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">
									Sign in
								</a>
							</li>
							<li className="nav-item">
								<OverlayTrigger
									delay={{ hide: 400, show: 300 }}
									overlay={(props) => <Tooltip {...props}>Favorites </Tooltip>}
									placement="bottom"
								>
									<a className="nav-link active" aria-current="page" href="#">
										{/* bookmark heart icon */}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="32"
											height="32"
											fill="currentColor"
											class="bi bi-bookmark-heart"
											viewBox="0 0 16 16"
										>
											<path
												fill-rule="evenodd"
												d="M8 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"
											/>
											<path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
										</svg>
									</a>
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
									<a className="nav-link active" aria-current="page" href="#">
										{/* shopping bag icon */}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="32"
											height="32"
											fill="currentColor"
											class="bi bi-bag"
											viewBox="0 0 16 16"
										>
											<path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
										</svg>
									</a>
								</OverlayTrigger>
							</li>
							<li className="nav-item ms-5">
								<OverlayTrigger
									delay={{ hide: 400, show: 300 }}
									overlay={(props) => (
										<Tooltip {...props}>I am a seller </Tooltip>
									)}
									placement="bottom"
								>
									<a className="nav-link active" aria-current="page" href="#">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="32"
											height="32"
											fill="currentColor"
											class="bi bi-shop-window"
											viewBox="0 0 16 16"
										>
											<path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
										</svg>
									</a>
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
