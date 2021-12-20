import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div style={{paddingBottom:'7%'}}>
            <h1 style={{textAlign:'center',fontSize:'40px',marginTop:'0'}}>New Products</h1>
            <p style={{color:'#595959',textAlign:'center',fontSize:'20px',paddingBottom:'20px'}}>There are many products available. Pick your favourite product.</p>
            <div className="products-container">
                {
                    products.map(product => <Product 
                    key={product.id}
                    product={product}
                    />)
                }
            </div>
        </div>
    );
};

export default Products;