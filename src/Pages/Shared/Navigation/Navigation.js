import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <nav>
            <div className="logo"><h1>Nmart</h1></div>
            <div className="menu">
                <Link to="/home">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
};

export default Navigation;