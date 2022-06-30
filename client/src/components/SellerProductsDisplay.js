import React, { useState, useEffect } from "react";
import NavbarSeller from "../components/Navbar/NavbarSeller";
import Footer from "./Footer";

function SellerProductsDisplay({ users, updateUsers }) {
  const [storeProducts, setStoreProducts] = useState({});

  // let user = localStorage.getItem("user");
  // let userId = user.userId;
  // console.log(user);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    let userId = user.userId;
    console.log(user);

    //Here I need to find a sellerID using userID (router is ready and is on the right)
    // but i just dont know how to do two fetching in on useEffect
    const fetchData = async () => {
      // get the data from the api
      const data = await fetch(
        `http://localhost:5000/sellers/seller/${userId}`
      );
      // convert data to json
      const seller = await data.json();
      console.log(seller);
      const productData = await fetch(
        `http://localhost:5000/products/sellers/${seller.sellerId}`
      );
      const products = await productData.json();
      return products;
    };

    // call the function
    const allProducts = fetchData();
    // make sure to catch any error
    console.log(allProducts);
    setStoreProducts(allProducts);
  }, []);

  return (
    <div>
      <NavbarSeller />
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              {/* <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email Address</th> */}
              <th scope="col">Product Name</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td> */}
              <td>{storeProducts.productName}</td>
              <td>{storeProducts.quantity}</td>
            </tr>
            );
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default SellerProductsDisplay;
