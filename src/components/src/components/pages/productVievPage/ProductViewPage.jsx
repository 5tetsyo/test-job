import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import ModalEdit from '../../modal/ModalEdit';

const ProductViewPage = () => {
    const location = useLocation()
    const product = location.state.product;
    return (
        <div>
            <div>{product.title}</div>
            <div><img width = '500px' src={product.image} alt=""/></div>
            <div>Count: {product.rating.count}</div>
            <div>Price: {product.price}</div>
            <div>Description: {product.description}</div>
            <button onClick={() => {}}>Edit product</button>
            <ModalEdit>
            </ModalEdit>
            <Link to={'/'}>{'<-- BACK'}</Link>
        </div>
    );
};

export default ProductViewPage;