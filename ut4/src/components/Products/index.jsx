import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import './style.css';

export const productList = [
    { id: 1, name: 'Product 1', price: 29.99, description: 'Description for product 1' },
    { id: 2, name: 'Product 2', price: 49.99, description: 'Description for product 2' },
    { id: 3, name: 'Product 3', price: 19.99, description: 'Description for product 3' },
    { id: 4, name: 'Product 4', price: 39.99, description: 'Description for product 4' },
    { id: 5, name: 'Product 5', price: 59.99, description: 'Description for product 5' },
    { id: 6, name: 'Product 6', price: 24.99, description: 'Description for product 6' },
    { id: 7, name: 'Product 7', price: 34.99, description: 'Description for product 7' },
    { id: 8, name: 'Product 8', price: 44.99, description: 'Description for product 8' },
    { id: 9, name: 'Product 9', price: 54.99, description: 'Description for product 9' },
    { id: 10, name: 'Product 10', price: 64.99, description: 'Description for product 10' },
];

const Products = () => {
    const params = useParams();
    return (
        <div className="product">
            <Outlet></Outlet>
            {productList.map((product) => (
                <Link to={`./${product.id}`} key={product.id}>{product.name}</Link>
            ))}
            <Link to='/'>Go Back</Link>
        </div>
    );
};

export default Products;
