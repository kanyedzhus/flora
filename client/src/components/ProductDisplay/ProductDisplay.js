import React, {useContext, useEffect, useState} from "react";
import CartContext from '../CartContext';
import Api from '../helpers/Api';
import './ProductDisplay.css';
import {Link} from 'react-router-dom';
import Loading from './Loading';
import Modal from './Modal';

function ProductDisplay({category, user}) {
    const [products, setProducts] = useState([]);
    const [errorMsg, setErrorMsg] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalShow, setModalShow] = useState(false);
    const [sortVal, setSortVal] = useState("default");
    const [query, setQuery] = useState("");
    const modalInfo = {
      title: 'Sorry, you must be logged in to add items to your cart!',
      closetext: 'Keep browsing',
      backtext: 'Log in',
      backpath: '/user/login'
    }

    useEffect(() => {
        getProducts();
      }, []);
    
      const getProducts = async () => {
          let response = await Api.getContent('/products');
          if (response.ok) {
            let productData = response.data;
            if (category === "All") {
              setProducts(productData);
              setLoading(false);
            }
            else {
              setProducts(productData.filter(product => product.category === category));
              setLoading(false);
            }
            
          }
          else {
            setErrorMsg("Uh oh! Something went wrong.")
            setLoading(false);
          }
        };
    
    let { cart, addToCartCB, increaseOrderCountCB, decreaseOrderCountCB } = useContext(CartContext); 
    
    const handleAdd = (id, price) => {
        if (user) {addToCartCB(id, price)}
        else {setModalShow(true)};
      }

    const handleIncrease = (id, current, price) => {
        increaseOrderCountCB(id, current, price);
    }
    
    const handleDecrease = (id, current, price) => {
        decreaseOrderCountCB(id, current, price);
    }

    const handleSort = (e) => {
      setSortVal(e.target.value);
    };

    const handleSearch = (e) => {
      setQuery(e.target.value);
    }

    return (
        <div>

        {
          loading
          ?
          <Loading />
          :
          (
            <div>
            
            <div className="d-flex justify-content-end align-items-center mb-3">
            
            <div className="w-75 me-3">  
            <input className="w-100" name="query" value={query} placeholder="Search for a product..." onChange={e => handleSearch(e)}/>
            </div>

            
            <select name="product-sort" onChange={e => handleSort(e)} className="product-sort">
            <option value="default">Sort by recommended</option>
            <option value="priceAsc">Sort by price, lowest to highest</option>
            <option value="priceDesc">Sort by price, highest to lowest</option>
            </select>
  
            </div> 


          <div className="ProductCards">
        
          <div className="row">
              {products
                  .sort((a,b) => {
                    if (sortVal === "priceAsc") {
                      return a.price > b.price ? 1 : -1
                    }
                    else if (sortVal === "priceDesc") {
                      return a.price < b.price ? 1 : -1
                    }
                    else if (sortVal === "default") {
                      return a.productid > b.productid ? 1 : -1
                    }
                  })
                  .filter(p => {
                    if (query === "") {
                      return p
                    } else if (p.name.toLowerCase().includes(query.toLowerCase())) {
                      return p
                    }
                  }) 
                  .map(p => (
                  <div key={p.productid} className="col-sm-6 col-md-6 col-lg-4">
                  
                  <div className="card">
  
                  <Link to={`/products/${p.productid}`}>
                  <img src={p.imgurl} className="card-img-top" alt="..."/>
                  </Link>
  
                  <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <span className="prod-price badge badge-pill badge-light">€{(p.price/100).toFixed(2)}</span>
                  <br></br>
                  
  
                  {   
                      (cart.filter(cartitem => cartitem.productid === p.productid).length) > 0 && user
                      ?
                      (
                          <div className="d-flex">
                          <button className="btn btn-primary btn-products" disabled>Product Added!</button>
                          <button className="btn btn-sm ms-2 btn-cart-left text-light" onClick={e => handleIncrease(p.productid, cart.filter(cartitem => cartitem.productid === p.productid)[0].quantity, p.price)}> + </button>
                          <div className="cart-quantity d-flex align-items-center justify-content-center">{cart.filter(cartitem => cartitem.productid === p.productid)[0].quantity}</div>
                          <button className="btn btn-sm btn-cart-right text-light" onClick={e => handleDecrease(p.productid, cart.filter(cartitem => cartitem.productid === p.productid)[0].quantity, p.price)}>-</button>
                          </div>
                      )
                      :
                      (<button className="btn btn-primary btn-products" onClick={e => handleAdd(p.productid, p.price)}>Add</button>)
                  }
                  
                  
                  </div>
                  </div>
                  </div>
               ))}
          </div>
          </div>
          </div> )
        }
        <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                modalInfo={modalInfo}
            />
</div>
     );
}
export default ProductDisplay;