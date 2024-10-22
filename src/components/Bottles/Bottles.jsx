import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';
import { addToLS, getStoredCart, removeFromLS } from "../../utilities/localstore";
import Cart from "../../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect( () =>{
        fetch('bottles.json')
        .then((res) => res.json())
        .then((data) => setBottles(data))
    },[])

    //load cart form local storage
    useEffect(() =>{
        console.log('Call the use effect',bottles.length)
        if(bottles.length>0){
            const storedCart = getStoredCart();
            console.log(storedCart, bottles)
            const saveCart = [];
            for(const id of storedCart){
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    saveCart.push(bottle)
                }
            }
            console.log("Save cart", saveCart)
            setCart(saveCart);
            
        }
    },[bottles])


    const handleAddToCart =(bottle) =>{
        const newCart = [...cart, bottle]
        setCart(newCart);
        addToLS(bottle.id)
    }
    const handleRemoveFromCart = id => {
        //visual cart remove
        const  remainingCart = cart.filter(bottle => bottle.id !==id);
        setCart(remainingCart);
        //remove from ls
        removeFromLS(id);
    }
    return (
        <div>
           <h2>Bottles Available: {bottles.length}</h2>
           <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>

          <div className="bottle-container">
          {
            bottles.map(bottle => <Bottle 
                key={bottle.id}
                bottle={bottle}
                handleAddToCart ={handleAddToCart}
            ></Bottle>)
           } 
          </div>
        </div>
    );
};

export default Bottles;