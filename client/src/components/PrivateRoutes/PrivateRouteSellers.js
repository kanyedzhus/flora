import React from "react";
import { Navigate } from "react-router-dom";
import Local from '../helpers/Local';


function PrivateRouteSellers(props) {
    // Redirect to /login if anonymous user
    let sellerid = Local.getSellerId();
    if (!sellerid) {
        return <Navigate to="/seller/login" />;
    }

    // Render child component(s)
    return (
        <>
            {props.children}
        </>
    );
}

export default PrivateRouteSellers;