import React, { useContext, useState} from "react";
import { ProductsContext } from "../../contexts/products-context";

import "./Navbar.css";

function SubNavbar(){
let { categoryId, setCategoryId } = useContext(ProductsContext);


const handleCategories=(e, number)=>{
    e.preventDefault();
    console.log(number)
    setCategoryId(number)
}
console.log(categoryId)
    return(
    <div className="navbar-collapse ">
            <div className=" ">

            <button className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={(e)=>handleCategories(e)}> Outdoor Plants </button>
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