import React, { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/products-context";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import "./Navbar.css";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

function SubNavbar() {
	let { categoryId, setCategoryId } = useContext(ProductsContext);

	const handleCategories = (e) => {
		e.preventDefault();

		// setCategoryId(number)
	};

	return (
		<div className="mx-3">
			<Dropdown className="d-inline mx-2">
				<Dropdown.Toggle variant="outline-success" id="dropdown-autoclose-true">
					Outdoor Plants
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item href="#">Climbing Plants</Dropdown.Item>
					<Dropdown.Item href="#">Trees</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<Dropdown className="d-inline mx-2">
				<Dropdown.Toggle variant="outline-success" id="dropdown-autoclose-true">
					Indoor Plants
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item href="#">Potted Plants</Dropdown.Item>
					<Dropdown.Item href="#">Cacti and succulents</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<Dropdown className="d-inline mx-2">
				<Dropdown.Toggle variant="outline-success" id="dropdown-autoclose-true">
					Flowers
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item href="#">Bouquets</Dropdown.Item>
					<Dropdown.Item href="#">Dried Flowers</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
}

export default SubNavbar;
