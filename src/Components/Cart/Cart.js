import React from 'react';

const Cart = (props) => {
    const cart = props.cart ; 
    console.log(cart);
    //const total = cart.reduce((total,prod)=>total + prod.price,0)
    let total = 0 ;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price ;
    }

    let shipping = 0 ;
    if(total>35){
        shipping = 0 ;
    }
    else if(total>15){
        shipping = 4.99 ;
    }
    else if(total>0){
        shipping = 12.99 ;
    }
    const tax = (total/10) ;
    const formatNumber = (num)=>{
        const preccision = num.toFixed(2) ;
        return preccision ;
    }

    total = total + shipping + tax ;
    return (
        <div>
            <h4>Order Sumery</h4>
            <p>Items Ordered : {cart.length}</p>
            <p><small>Shiping Cost : {shipping}</small></p>
            <p><small>tax + vat : {formatNumber(tax)}</small></p>
            <p>Total Price : {total}</p>

        </div>
    );
};

export default Cart;