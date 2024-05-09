import axios from "axios";
import {Link} from "react-router-dom";
import { useContext, useState } from "react";
import classes from "./GettingData.module.css";
import CartContext from "../../store/CartContext";

const GettingData = () => {
  const { itemsAvailable, addItem, currEmail } = useContext(CartContext);

  const handlerOnSubmit = (arr, drr) => {

    // addItem(arr);

    axios.post(`https://crudcrud.com/api/cadab039bc16496c91b564c769253aa9/${currEmail}`, arr)
    .then((res)=>{
      console.log(res.data);
      addItem(res.data, drr);
    })
    .catch((err)=>{
      console.log(err);
    })

    // console.log(event);
    // addItem(latestObj);
    
   
  };

  return (
    <div className={classes.unorder_list}>
      <ul>
        {itemsAvailable.map((arr,drr) => {
          return (
            <li key={arr.id}>
              <span>Title: {arr.title} </span>
              {/* <img src={arr.imageUrl} alt="image not found" /> */}
              <Link to="/product-detail"> <img src={arr.imageUrl} alt="image not found" /> </Link>
              {/* <Link to="/auth"> <img src={arr.imageUrl} alt="image not found" /> </Link> */}
              <span> Rs. {arr.price} /- </span>
              <button
                className={classes.btn_add_to__cart}
                onClick={() => handlerOnSubmit(arr,drr)}
              >
                Add to Cart
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default GettingData;
