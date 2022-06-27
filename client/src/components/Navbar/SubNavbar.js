import React, { useContext } from "react";

import "./Navbar.css";

function SubNavbar(){
    return(
     <div className=" navbar-collapse">
      {/* <select className="" aria-label="Outdoor Plants">
						<option selected>Outdoor Plants</option>
						<option value="1">Climbing Plants</option>
						<option value="4">Trees</option>
					</select> */}
                    <ul className="navbar-nav"> 
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#">Outdoor Plants</a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Climbing Plants</a>
          <a className="dropdown-item" href="#">Trees</a>
        </div>
                 </li> 
             <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#">Indoor Plants</a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Potted Plants</a>
          <a className="dropdown-item" href="#">Cacti and Succulents</a>
        </div>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#">Flowers</a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Bouquet</a>
          <a className="dropdown-item" href="#">Dried Flowers</a>
        </div>
            </li>
        </ul>
        </div>
    );

}
export default SubNavbar;