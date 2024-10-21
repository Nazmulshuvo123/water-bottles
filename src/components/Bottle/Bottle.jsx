import './Bottle.css'
const Bottle = ({bottle, handleAddToCart}) => {
    const{name, img, price} = bottle;
    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h4>Price: $ {price}</h4>

            <button onClick={ ()=> handleAddToCart(bottle)} >Purchase</button>
        </div>
    );
};

export default Bottle;