export const addProduct = (value, newV, setValue) => {
    for (let v of Object.values(newV)) {
        if( v.length === 0) {
            alert('Value is incorrect. Try again.')
            return
        }
    }
    fetch('https://fakestoreapi.com/products',{
        method:"POST",
        body:JSON.stringify(
            {
                title: newV.title,
                price: newV.price,
                description: newV.description,
                image: newV.image,
                category: newV.category
            }
        )
    })
        .then(res=>res.json())
        .then(json=>setValue([...value, json]))
}
export const deleteProduct = (value, setValue, id) => {
    fetch(`https://fakestoreapi.com/products/${id}`,{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>setValue(value.filter(el => el.id !== id)))
}
export const editProduct = () => {
    
}