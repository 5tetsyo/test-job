export const getProducts = (setValue) => {
    const options = {
        method: 'GET'
    };
    fetch('https://fakestoreapi.com/products', options)
            .then(res=>res.json())
            .then(json=>{return !localStorage.getItem('products') ? localStorage.setItem('products', JSON.stringify(json)): json})
}