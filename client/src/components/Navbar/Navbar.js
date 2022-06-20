import React from "react";

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg bg-light">
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
						<li
							className="nav-item"
							data-bs-toggle="tooltip"
							data-bs-placement="bottom"
							title="Favorites"
						>
							<a className="nav-link active" aria-current="page" href="#">
								{/* bookmart heart icon */}
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
						</li>
						<li
							className="nav-item"
							data-bs-toggle="tooltip"
							data-bs-placement="bottom"
							title="Shopping Bag"
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
						</li>
						<li className="nav-item ms-5">
							<a className="nav-link active " aria-current="page" href="#">
								I am a seller
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
