import React from "react";
import "./product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  //console.log(props);  // here props means a single product 
  const { img, name, seller, stock, price } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <p className="product-name">{name}</p> <br />
        <p>
          <small>by : {seller}</small>
        </p>
        <p>${price}</p>
        <p>
          <small>only {stock} left in stock - order soon</small>
        </p>
        <button 
          onClick={()=>props.handelAddProduct(props.product)} 
          className="main-buton">
          <FontAwesomeIcon icon={faShoppingCart} 
          /> add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
