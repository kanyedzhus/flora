import React, {useContext, useState} from "react";
import { ProductsContext } from "../../contexts/products-context";
import SearchProductsContainer from "../SearchProductContainer";
import "./Navbar.css";


function Searchbar(){
const [inputProductName, setInputProductName] = useState("");
const [searchResponse, setSearchResponse] = useState ([]);
let { products } = useContext(ProductsContext);
//console.log(products)
if (!products) {
    products = [];
}

const handleChange =(event) => { 
const value = event.target.value;
setInputProductName(value)
//console.log(inputProductName)

}
//console.log(inputProductName)
const handleSearch = (event, inputProductName) =>{
    event.preventDefault();
    getSearch(inputProductName)
}
//console.log(searchResponse)
const getSearch =(inputProductName) =>{
 fetch(`/products/name/${inputProductName}`)
 .then(res => res.json())
 .then( response => {
    setSearchResponse(response);
   // <SearchProductsContainer productName = {searchResponse}/>
    
    
})
.catch(e => console.log(e));
 }

    return (<form className="d-flex mx-auto w-50 " role="search">
    <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={inputProductName}
        onChange={handleChange}
        
    />
   
    <button className="btn btn-outline-success" type="submit" onClick={(event) => handleSearch(event, inputProductName)}>
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
    <div className="dropdown">
        {products.filter((item) => {
            const searchTerm = inputProductName.toLowerCase();
            const productName = item.productName.toLowerCase();
            return(
                searchTerm && productName.startsWith(searchTerm) 
            )
        }
        ).map((item =>
        {return item.productName}
        ))}
    </div>

</form>)
}

export default Searchbar;