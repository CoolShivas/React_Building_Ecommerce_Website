import { useContext, useState } from "react";
import classes from "./GettingData.module.css";
import CartContext from "../../store/CartContext";

const GettingData = () => {
  // const [newTitle, setNewTitle] = useState();
  // const [newPrice, setNewPrice] = useState();
  // const [newImageUrl, setNewImageUrl] = useState();

  const { itemsAvailable, addItem } = useContext(CartContext);

  const handlerOnSubmit = (event) => {
    event.preventDefault();
    console.log("handlerOnSubmit Clicked");
    // const latestObj = {
    //   title: newTitle,
    //   price: newPrice,
    //   imageUrl: newImageUrl,
    // };
    // addItem(latestObj);

    // setNewTitle("");
    // setNewPrice("");
    // setNewImageUrl("");
  };

  return (
    <form className={classes.unorder_list} onSubmit={handlerOnSubmit}>
      <ul>
        {itemsAvailable.map((arr) => {
          return (
            <li key={arr.title}>
              <span>Title: {arr.title} </span>
              <img src={arr.imageUrl} alt="image not found" />
              <span> Rs. {arr.price} /- </span>
              <button className={classes.btn_add_to__cart} type="submit">
                Add to Cart
              </button>
            </li>
          );
        })}
      </ul>
    </form>
  );
};

export default GettingData;
