import './Bottle.css'
const Bottle = ({bottle}) => {
    const{name, img, price} = bottle;
    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <h4>Price: $ {price}</h4>
        </div>
    );
};

export default Bottle;