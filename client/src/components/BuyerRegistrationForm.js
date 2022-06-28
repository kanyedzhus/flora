import React, { useState } from "react";
import axios from "axios";

export default function BuyerRegistrationForm() {
  const style = {
    width: "100%",
    maxWidth: "330px",
    padding: "15px",
    margin: "auto",
  };
  const [credentials, setCredentials] = useState({
    userName: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const registerBuyer = async () => {
    try {
      const { data } = await axios("/auth/buyer/register", {
        method: "POST",
        data: credentials,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={style}>
      <form>
        <h2 className="h3 mb-3 fw-normal text-center">
          Create your Flora Account
        </h2>
        <div className="form-group mb-3">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="userName"
            className="form-control py-1"
            id="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control py-1"
            id="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          {" "}
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          {" "}
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            className="form-control py-1"
            id="firstName"
            value={credentials.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group mb-3">
          {" "}
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            name="lastName"
            className="form-control py-1"
            id="lastName"
            value={credentials.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="w-100 btn btn-md btn-outline-primary"
          onClick={registerBuyer}
        >
          Create Account
        </button>
      </form>
    </div>
  );
}
