import { useContext, useState } from "react";
import classes from "./GettingData.module.css";
import CartContext from "../../store/CartContext";

const GettingData = () => {
  const { itemsAvailable, addItem } = useContext(CartContext);

  const handlerOnSubmit = (event) => {
    console.log(event);
    console.log("handlerOnSubmit Clicked");

    const latestObj = {
      idABC: Math.random(),
      titleABC: event.title,
      priceABC: event.price,
      imageUrlABC: event.imageUrl,
      // quantity: quantity,
    };
    addItem(latestObj);
  };

  return (
    <div className={classes.unorder_list}>
      <ul>
        {itemsAvailable.map((arr) => {
          return (
            <li key={arr.title}>
              <span>Title: {arr.title} </span>
              <img src={arr.imageUrl} alt="image not found" />
              <span> Rs. {arr.price} /- </span>
              <button
                className={classes.btn_add_to__cart}
                onClick={() => handlerOnSubmit(arr)}
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
