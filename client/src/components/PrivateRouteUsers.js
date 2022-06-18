import React from "react";
import { Navigate } from "react-router-dom";
import Local from '../helpers/Local';


function PrivateRouteUsers(props) {
    // Redirect to /login if anonymous user
    let userid = Local.getUserId();
    if (!userid) {
        return <Navigate to="/user/login" />;
    }

    // Render child component(s)
    return (
        <>
            {props.children}
        </>
    );
} 

export default PrivateRouteUsers;