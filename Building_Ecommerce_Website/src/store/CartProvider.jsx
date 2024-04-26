import { useState } from "react";
import CartContext from "./CartContext";

const productsArr = [
  {
    id: "01A",

    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 1,
  },

  {
    id: "02B",
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 1,
  },

  {
    id: "03C",

    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },

  {
    id: "04D",

    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",

    quantity: 1,
  },
];

const CartProvider = (props) => {
  const [addProductItems, setProductItems] = useState(productsArr);

  const [cartItems, setCartItems] = useState([]);

  const addItemToBucketHandler = (addedItems) => {
    console.log(addedItems);
    setCartItems((previousData) => {
      return [...previousData, addedItems];
    });
  };

  const removeItemToBucketHandler = () => {};

  const changeQuantity = (id, quantity) => {
    // console.log(id);
    // console.log(quantity);
    // console.log(cartItems);
    const special = cartItems.findIndex((crr) => crr.id === id);
    // console.log(special);
    let updatedCartItems = [...cartItems];
    // console.log(updatedCartItems[special]);
    let qrr = Number(updatedCartItems[special].quantity);

    updatedCartItems[special].quantity = qrr + quantity;

    if (updatedCartItems[special].quantity === 0) {
      updatedCartItems = updatedCartItems.filter((drr) => drr.id !== id);
    }
    setCartItems(updatedCartItems);
  };

  const cartContextApi = {
    itemsAvailable: addProductItems,
    totalAmount: 0,
    cartItems: cartItems,
    addItem: addItemToBucketHandler,
    removeItem: removeItemToBucketHandler,
    changeQuantity: changeQuantity,
  };

  return (
    <CartContext.Provider value={cartContextApi}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
