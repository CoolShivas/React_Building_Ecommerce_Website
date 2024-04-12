import { useContext } from "react";
import classes from "./GettingData.module.css";
import CartContext from "../../store/CartContext";


const GettingData = () =>{

   const {itemsAvailable} = useContext(CartContext);
   
    return <div className={classes.unorder_list}>
    <ul>
        {itemsAvailable.map((arr)=>{
            return <li key={arr.title}> 
            <span>Title: {arr.title} </span> 
            <img src={arr.imageUrl} alt="image not found" /> 
            <span> Rs. {arr.price} /- </span>
            <button className={classes.btn_add_to__cart}> Add to Cart</button>
            </li>
        })}
    </ul>
    </div>
}

export default GettingData;