const getStoredCart = () =>{
    const storedCartString = localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString);
    }
    return [];
}

const saveCartToLS = (cart) =>{
    const cartStringified = JSON.stringify(cart);
}

const addToLs = (id) =>{
    const cart = getStoredCart();
    cart.push(id);
    //Save cart to local storage
    saveCartToLS(cart)
}