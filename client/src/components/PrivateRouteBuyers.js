import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRouteBuyers(props) {
  // Redirect to /login if anonymous user

  let user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  if (!user) {
    return <Navigate to="/signin" />;
  } else if (user.role === "seller") {
    return <Navigate to="/" />;
  } else {
    // Render child component(s)
    return <>{props.children}</>;
  }
}

export default PrivateRouteBuyers;
