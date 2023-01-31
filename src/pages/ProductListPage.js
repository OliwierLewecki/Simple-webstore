import React from "react";
import { Link } from "react-router-dom";
import '../styles/ProductListPage.css'

const products = ['Hoodies', 'Jeans', 'Beanies']

const ProductListPage = () => {

    const List = products.map(product => (
        <li key={product}>
            <Link to={`/product/${product}`}>{product}</Link>
        </li>
    ))

    return (
        <div className="products">
            <h2>Product list:</h2>
            <div>
                <ul>{List}</ul>
            </div>
        </div>
    );
}

export default ProductListPage;