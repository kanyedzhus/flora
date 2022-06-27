import React from "react";

export default function FilterUI() {
	return (
		<aside className="col-md-3">
			<div className="card">
				<header className="card-header">
					<h6 className="title">Price</h6>
				</header>
				<div className="card-body d-flex flex-column">
					<div className="row d-flex g-3 ">
						<div className="form-group col-md-6">
							<label>Min</label>
							<input
								className="form-control px-2"
								placeholder="$0"
								type="number"
							/>
							
						</div>
						<div className="form-group text-right col-md-6">
							<label>Max</label>
							<input
								className="form-control px-2"
								placeholder="$1,0000"
								type="number"
							/>
						</div>
					</div>
					<button className="btn btn-block btn-primary mt-3">Apply</button>
				</div>

				<header className="card-header">
					<h6 className="title">Features</h6>
				</header>
				<div className="card-body">
					<form>
						<label className="form-check">
							<input className="form-check-input" type="checkbox" value="" />
							<span className="form-check-label"> Pet Friendly </span>
						</label>

						<label className="form-check">
							<input className="form-check-input" type="checkbox" value="" />
							<span className="form-check-label"> Air Purifying </span>
						</label>

						<label className="form-check">
							<input className="form-check-input" type="checkbox" value="" />
							<span className="form-check-label"> Low Maintenance </span>
						</label>
					</form>
				</div>

				<header className="card-header">
					<h6 className="title">Light Needs</h6>
				</header>
				<div className="card-body">
					<label className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="light"
							value=""
						/>
						<span className="form-check-label"> Low </span>
					</label>
					<label className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="light"
							value=""
						/>
						<span className="form-check-label"> Medium </span>
					</label>
					<label className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="light"
							value=""
						/>
						<span className="form-check-label"> High </span>
					</label>
				</div>
			</div>
		</aside>
	);
}
