import React, { useState, useEffect } from 'react';
import Product from '../Product';
import { getProducts } from '../../async/getProduct';
import ModalDelete from '../../modal/ModalAdd';
import ModalAdd from '../../modal/ModalAdd';

import { addProduct, deleteProduct } from '../../productChange';
import Inputs from '../../Inputs';

const ProductList = () => {
    const [input, setInput] = useState({title: "",
        price: "",
        description: "",
        image: "",
        category: ""})
    const [visible, setVisible] = useState(false)
    const [visibleAdd, setVisibleAdd] = useState(false)
    const [products, setProducts] = useState(null);
    const [clicked, setClicked] = useState(null);
    useEffect(() => {
        getProducts(setProducts);
    }, [])
    return (
        <div>
            <button onClick={() => setVisibleAdd(true)}>Add product</button>
            <ModalAdd visible={visibleAdd} setVisible={setVisibleAdd}>
                <Inputs setInput={setInput} input={input}></Inputs>
                <button onClick={() => {setVisibleAdd(false); console.log(input); addProduct(products, input, setProducts)}}>Add</button>
                <button onClick={() => {setVisibleAdd(false)}}>Cancel</button>
            </ModalAdd>
             {products==null ? <p>Loading</p> : products.map(el => <Product key={el.id} setClicked={setClicked} product={el} visible={visible} setVisible={setVisible}></Product>)}
            <ModalDelete visible={visible} setVisible={setVisible}>
                Do you want to delete this position?
                <button onClick={() => {setVisible(false);console.log(clicked); deleteProduct(products, setProducts, clicked)}}>Yes</button>
                <button onClick={() => {setVisible(false)}}>No</button>
            </ModalDelete>
        </div>
    );
};

export default ProductList;