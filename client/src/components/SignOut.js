import React, { useState } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

function SignOut() {
  // let history = useHistory();

  function handleSignOut() {
    localStorage.removeItem("token");
    // sessionStorage.setItem("userToken", "");
    // sessionStorage.clear();
    // history.push("/sigin"); // whichever component you want it to route to
  }

  return (
    <button type="button" onClick={handleSignOut}>
      SignOut
    </button>
  );
}

export default SignOut;
