import React, { useState, useEffect } from 'react';
import './App.css';


function ItemDetails({ match }) {
    useEffect(() => {
        fetchProduct();
    }, []);

    const [product, setProduct] = useState({
        image:{}
    });

    const fetchProduct = async () => {
        const fetchProduct = await fetch(`https://fakestoreapi.com/products/=${match.params.id}`)
        
        const product = await fetchProduct.json();
        setProduct(product);
        console.log(product);
    };


    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.image.transparent} alt="" />
        </div>
    );
}

export default ItemDetails;