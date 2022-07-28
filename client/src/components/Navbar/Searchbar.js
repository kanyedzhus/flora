import React, {useContext, useState} from "react";
import { ProductsContext } from "../../contexts/products-context";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";


function Searchbar(){
 const [inputProductName, setInputProductName] = useState("");
 const navigate = useNavigate();

let { products, searchQuery, changeSearchQuery } = useContext(ProductsContext);
console.log(products)
if (!products) {
    products = [];
}


console.log(searchQuery)

const handleChange =(event) => { 
    const value = event.target.value;
    setInputProductName(value)
    
    console.log(value)
    
}

const handleValue = (event, item)=>{
    event.preventDefault();
    setInputProductName(item)
}


const handleSearch = (event) =>{
    event.preventDefault();
    changeSearchQuery(inputProductName)
    
}


    return (
  
    <form className="d-flex mx-auto w-50 position-relative " role="search" onSubmit={(e) => {handleSearch(e) 
    navigate("/search")}} >
    <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={inputProductName}
        onChange={(e) => handleChange(e)}
        
    />
   
    <button className="btn btn-outline-success" type="submit" >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
        >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
    </button>
    <div className="searchBar position-absolute mt-5">
        {products.filter((item) => {
            const searchTerm = inputProductName.toLowerCase();
            const productName = item.productName.toLowerCase();
            return(
                searchTerm && productName.startsWith(searchTerm) 
            )
        }
        ).map((item =>
            ( <div key={item.productId} onClick={(e) => {handleValue(e, item.productName) }}>
                {item.productName}
            </div>
        )
        ))}
    </div>
</form>


)
}

export default Searchbar;