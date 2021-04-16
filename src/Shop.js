import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Shop() {
    useEffect(() => {
        fetchItems();
    }, []);

    const [product, setProducts] = useState([]);

    const fetchItems = async () => {
        const data = await fetch(
            'https://fakestoreapi.com/products'
        );

        const products = await data.json();
        console.log(products);
        setProducts(products);
    };

    return(
        <div>
            {product.map(product =>(
                <h1 key={product.id}>
                    <Link to={`/shop/${product.id}`}>{product.title}</Link>
                </h1>
            ))}
        </div>
    );
}

export default Shop;