import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    return (
        <div class="epic">
            <div className="image">
                <img src={props.product.img} />
            </div>

            <div >
                <h4 class="name">{props.product.name}</h4>
                <br />
                <p><small>by:{props.product.seller}</small></p>
                <p>price:{props.product.price}$</p>
                <br />
                <p><small>only {props.product.stock} left in stock-order soon</small></p>
            <button class="btn" onClick={()=>props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Ad to card</button>
            </div>

        </div>
    );
};

export default Product;