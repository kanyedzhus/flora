import React from "react";

import "./Navbar.css";

function SubNavbar(){
    return(
     <div className=" navbar-collapse">
                  
                    <div className="nav-item dropdown-nav">
                    <a className="nav-link dropdown-toggle" href="/search">Outdoor Plants</a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="/search">Climbing Plants</a>
          <a className="dropdown-item" href="/search">Trees</a>
        </div>
                 </div> 
             <div className="nav-item dropdown-nav">
                <a className="nav-link dropdown-toggle" href="#">Indoor Plants</a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Potted Plants</a>
          <a className="dropdown-item" href="#">Cacti and Succulents</a>
        </div>
            </div>
            <div className="nav-item dropdown-nav">
                <a className="nav-link dropdown-toggle" href="#">Flowers</a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Bouquet</a>
          <a className="dropdown-item" href="#">Dried Flowers</a>
        </div>
            </div>
      
        </div>
    );

}
export default SubNavbar;