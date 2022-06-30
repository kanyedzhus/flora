import React, { useState, useEffect } from "react";
import NavbarSeller from "../components/Navbar/NavbarSeller";
import Footer from "./Footer";

function SellerAbout({ users, updateUsers }) {
  const [storeData, setStoreData] = useState({});

  // let user = localStorage.getItem("user");
  // let userId = user.userId;
  // console.log(user);

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
    <div>
      <NavbarSeller />
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              {/* <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email Address</th> */}
              <th scope="col">Store Name</th>
              <th scope="col">Store Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {/* <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td> */}
              <td>{storeData.storeName}</td>
              <td>{storeData.storeDescription}</td>
            </tr>
            );
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default SellerAbout;
