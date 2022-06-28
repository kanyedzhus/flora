import React from "react";

import "./Navbar.css";

function SubNavbar(){
    return(
    <div className="navbar-collapse ">
    <div className=" ">

    <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Outdoor Plants </button>
    <div className="dropdown-menu">
      <a href="" className="dropdown-item">Clibing Plants</a>
      <a href="" className="dropdown-item">Trees</a>
    </div>

    <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Inddoor Plants </button>
    <div className="dropdown-menu">
      <a href="" className="dropdown-item">Potted Plants</a>
      <a href="" className="dropdown-item">Cacti and succulents</a>
    </div>
    
    <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Flowers </button>
    <div className="dropdown-menu">
      <a href="" className="dropdown-item">Bouquet</a>
      <a href="" className="dropdown-item">Dried Flowers</a>
    </div>

    </div> 
    </div>
    );

}
export default SubNavbar;