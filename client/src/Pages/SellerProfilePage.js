import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SellerAbout from "../components/SellerAbout";
import SellerProductsDisplay from "../components/SellerProductsDisplay";
import { Link, useNavigate } from "react-router-dom";
import NewProductForm from "../components/NewProductForm";

export default function SellerProfilePage() {
  const [storeData, setStoreData] = useState({});
  //   const [activeProfileInfo, setActiveProfileInfo] = useState(true);
  //   const [activeAddProduct, setActiveAddProduct] = useState(false);
  //   const [activeViewProducts, setactiveViewProducts] = useState(false);

  //   const handleChangeView = (e) => {
  //     setActiveProfileInfo();
  //   };

  const [active, setActive] = useState(1);
  const SetView = (active) => {
    setActive(active);
  };

  const ActiveView = () => {
    switch (active) {
      case 1:
        return <SellerAbout />;
      case 2:
        return <NewProductForm />;
      default:
        return <SellerProductsDisplay />;
    }
  };

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

  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <aside className="col">
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
                    <svg
                      className="bi pe-none me-2"
                      width="16"
                      height="16"
                    ></svg>
                    <button
                      className="w-100 btn btn-md btn-outline-success"
                      onClick={() => SetView(1)}
                    >
                      Profile Information
                    </button>
                  </div>
                </li>
                <li>
                  <div className="nav-link link-dark">
                    <svg
                      className="bi pe-none me-2"
                      width="16"
                      height="16"
                    ></svg>
                    <button
                      className="w-100 btn btn-md btn-outline-success"
                      onClick={() => SetView(2)}
                    >
                      Add Product
                    </button>
                  </div>
                </li>
                <li>
                  <div className="nav-link link-dark">
                    <svg
                      className="bi pe-none me-2"
                      width="16"
                      height="16"
                    ></svg>
                    <button
                      className="w-100 btn btn-md btn-outline-success"
                      onClick={() => SetView(3)}
                    >
                      View All Products
                    </button>
                  </div>
                </li>
              </ul>
              <hr />
            </div>
          </aside>
          <div className="col-9">
            {ActiveView()}
            {/* <SellerAbout />
            <SellerProductsDisplay />
            <NewProductForm /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}
