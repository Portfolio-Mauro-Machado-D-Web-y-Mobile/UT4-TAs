import React from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

import {productList} from '../Products';

const Product = () => {
    const { id } = useParams();
    const product = productList.find(p => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="product">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
        </div>
    );
};

export default Product;