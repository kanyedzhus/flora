import React from "react";
import NewProductForm from "./NewProductForm";
import Footer from "./Footer";
import NavbarSeller from "../components/Navbar/NavbarSeller";

export default function SellerProfile() {
  return (
    <main>
      <NavbarSeller />

      <div className="d-flex">
        <aside>
          <div
            className="d-flex flex-column flex-shrink-0 p-3 bg-light"
            style={{ width: "280px" }}
          >
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
            >
              <svg className="bi pe-none me-2" width="40" height="32"></svg>
              <span className="fs-4">Store name</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
              <li className="nav-item">
                <a href="#" className="nav-link active" aria-current="page">
                  <svg className="bi pe-none me-2" width="16" height="16"></svg>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="nav-link link-dark">
                  <svg className="bi pe-none me-2" width="16" height="16"></svg>
                  Add Product
                </a>
              </li>
              <li>
                <a href="#" className="nav-link link-dark">
                  <svg className="bi pe-none me-2" width="16" height="16"></svg>
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="nav-link link-dark">
                  <svg className="bi pe-none me-2" width="16" height="16"></svg>
                  Orders
                </a>
              </li>
              <li>
                <a href="#" className="nav-link link-dark">
                  <svg className="bi pe-none me-2" width="16" height="16"></svg>
                  Customers
                </a>
              </li>
            </ul>
            <hr />
          </div>
        </aside>
        <NewProductForm />
      </div>
      <Footer />
    </main>
  );
}
