import classes from "./CartIcon.module.css";
import { BsCart4 } from "react-icons/bs";



const CartIcon = () =>{
    return <span className={classes.cart_icon}> <BsCart4 /> </span>
}


export default CartIcon;