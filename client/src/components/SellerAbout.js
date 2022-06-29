import React, { useState, useEffect } from "react";
import "./AdminView.css";

function SellerAbout({ users, updateUsers }) {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    storeName: "",
    storeDescription: "",
    userId: "",
  });

  useEffect(() => {
    fetch("http://localhost:3000/users/sellers")
      .then((res) => res.json())
      .then((json) => {
        // upon success, update users
        console.log(json);
        setData(json);
      })
      .catch((error) => {
        // upon failure, show error message
        console.log(error);
      });
  }, []);

  const handleComplete = (user) => {
    updateComplete(user);
  };

  const updateComplete = (user) => {
    fetch(`/api/users/${user.id}/complete`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    })
      // Continue fetch request here
      .then((res) => res.json())
      .then((json) => {
        const old_requests = requests;
        requests = [...old_requests, json];
        updateRequests(json);
      })
      .catch((e) => console.error(e));
  };

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email Address</th>
            <th scope="col">Store Name</th>
            <th scope="col">Store Description</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <th scope="row"> {index + 1} </th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.storeName}</td>
                <td>{user.storeDescription}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default SellerAbout;
