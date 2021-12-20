import React from 'react';
import './Product.css'

const Product = ({product}) => {
    const {name,img,price,category} = product
    return (
        <div className="product-container">
            <img src={img} width="100%" alt="" />
            <h4 style={{color:'#666666',fontSize:'13px',margin:0}}>{category}</h4>
            <h3 style={{fontSize:'17px',margin:0,lineHeight:'35px'}}>{name}</h3>
            <h4 style={{color:'#666666',fontSize:'19px',marginTop:0,marginBottom:'10px'}}>${price}</h4>
            <button className="product-button">Buy Now</button>
        </div>
    );
};

export default Product;