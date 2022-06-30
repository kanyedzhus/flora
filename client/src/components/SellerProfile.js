import React, { useState, useEffect } from "react";
import NewProductForm from "./NewProductForm";
import Footer from "./Footer";
import NavbarSeller from "../components/Navbar/NavbarSeller";
import SellerAbout from "./SellerAbout";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function SellerProfile() {
  const [storeData, setStoreData] = useState({});

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
    <main>
      <NavbarSeller />
      {/* <div className="container col-xxl-8 px-4 py-5">
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
          <div className="col-lg-6 text-lg-left  text-center">
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
      </div> */}
      <div className="d-flex">
        <aside>
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
              {/* <li>
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
              </li> */}
            </ul>
            <hr />
          </div>
        </aside>
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
            <div className="col-lg-6 text-lg-left  text-center">
              <h1 className=" fw-bold lh-1 mb-3">Share your green happiness</h1>
              <p className="lead">
                Easily offer the perfect plant for home or garden.
              </p>

              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
                onClick={() => navigate("/search")}
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
