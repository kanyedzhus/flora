import React, { useContext, useState } from "react";
import { ProductsContext } from "../../contexts/products-context";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import "./Navbar.css";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

function SubNavbar() {
	let { categoryId, setCategoryId } = useContext(ProductsContext);

	const handleCategories = (e, number) => {
		e.preventDefault();
       setCategoryId(number);
		console.log(categoryId);
	};

	return (
		<div className="mx-3">
			<Dropdown className="d-inline mx-2">
				<Dropdown.Toggle variant="outline-success" id="dropdown-autoclose-true">
					Outdoor Plants
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item href="/search" onClick={(e) => {handleCategories(e, 5)}}>Climbing Plants</Dropdown.Item>
					<Dropdown.Item href="/search" onClick={(e) => {handleCategories(e, 6)}}>Trees</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<Dropdown className="d-inline mx-2">
				<Dropdown.Toggle variant="outline-success" id="dropdown-autoclose-true">
					Indoor Plants
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item href="/search" onClick={(e) => {handleCategories(e, 2)}}>Potted Plants</Dropdown.Item>
					<Dropdown.Item href="/search" onClick={(e) => {handleCategories(e, 3)}}>Cacti and succulents</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
			<Dropdown className="d-inline mx-2">
				<Dropdown.Toggle variant="outline-success" id="dropdown-autoclose-true">
					Flowers
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item href="/search" onClick={(e) => {handleCategories(e, 8)}}>Bouquets</Dropdown.Item>
					<Dropdown.Item href="/search" onClick={(e) => {handleCategories(e, 9)}}>Dried Flowers</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</div>
	);
}

export default SubNavbar;
