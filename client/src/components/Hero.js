import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
	const navigate = useNavigate();
	return (
		<div className="container col-xxl-8 px-4 py-5">
			<div className="row flex-lg-row-reverse align-items-center justify-content-center g-5 py-5">
				<div className="col-10 col-sm-8 col-lg-6">
					<img
						src="https://images.unsplash.com/photo-1596899783950-db66eb0af606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80"
						className="d-block mx-lg-auto img-fluid"
						alt="Bootstrap Themes"
						height="500"
						loading="lazy"
					/>
				</div>
				<div className="col-lg-6">
					<h1 className=" fw-bold lh-1 mb-3">Nurture your green thumb</h1>
					<p className="lead">
						Easily find the perfect plant for your home or garden.
					</p>

					<button
						type="button"
						className="btn btn-primary btn-lg px-4 me-md-2"
						onClick={() => navigate("/search")}
					>
						Start Shopping
					</button>
				</div>
			</div>
		</div>
	);
}
