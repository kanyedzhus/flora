import React, { useContext, useState} from "react";
import { ProductsContext } from "../../contexts/products-context";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import "./Navbar.css";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

function SubNavbar(){
let { categoryId, setCategoryId } = useContext(ProductsContext);


const handleCategories=(e)=>{
    e.preventDefault();
    
    // setCategoryId(number)
}

    return(
   
   <div>        
            <DropdownButton title="Outdoor Plants">

            
            
              <DropdownItem href="" className="dropdown-item">Clibing Plants</DropdownItem>
              <DropdownItem href="" className="dropdown-item">Trees</DropdownItem>
           
            </DropdownButton> 
            <DropdownButton title="Indoor Plants">
    
           
              <DropdownItem href="" className="dropdown-item">Potted Plants</DropdownItem>
              <DropdownItem href="" className="dropdown-item">Cacti and succulents</DropdownItem>
          
            </DropdownButton>
            <DropdownButton title="Flower">
        
           
              <DropdownItem href="" className="dropdown-item">Bouquet</DropdownItem>
              <DropdownItem href="" className="dropdown-item">Dried Flowers</DropdownItem>
          
            </DropdownButton>
            </div> 
    
    ); 
}


export default SubNavbar;