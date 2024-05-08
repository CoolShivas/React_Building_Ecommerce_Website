import { useState, useEffect } from "react";
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

// // Retrieving cart items from localStorage after refreshing the page again and again;
const gettingLocalStorageData = () =>{
  let localCartData = localStorage.getItem("CartPurchase");
  if(localCartData == [])
    {
      return [];
    }
    else{
      return JSON.parse(localCartData);
    }
};


const CartProvider = (props) => {
  const [addProductItems, setProductItems] = useState(productsArr);

  const [cartItems, setCartItems] = useState(gettingLocalStorageData() || []);

  const [token, setToken] = useState(null);

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(token);

  const addItemToBucketHandler = (addedItems) => {
    console.log(addedItems);
    setCartItems((previousData) => {
      return [...previousData, addedItems];
    });
  };

  const removeItemToBucketHandler = (id) => {
    const removeDel = cartItems.filter((err)=>{
      return err.id !== id;
    })
    setCartItems(removeDel);
  };

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


  const handlerOnLogIn = (tookey) =>{
    setToken(tookey);
    localStorage.setItem("myData" , tookey);
    setIsUserLoggedIn(true);
  };

  const handlerOnLogOut = () =>{
    setToken(null);
    localStorage.removeItem("myData");
    setIsUserLoggedIn(false);
  };

  useEffect(()=>{
    localStorage.getItem("myData");
    setIsUserLoggedIn(true);
  },[]);

  // // Adding cart items to localStorage ;
  useEffect(()=>{
    localStorage.setItem("CartPurchase", JSON.stringify(cartItems));
    // // Setting data to cart by giving name i.e, "CartPurchase" and converting it JSON.stringify and passing the cart items i.e,(cartItems) and most import for updating again and again passing dependency arr having cartItems in it. For updating again and again;
  },[cartItems]);
 
  const cartContextApi = {
    itemsAvailable: addProductItems,
    totalAmount: 0,
    cartItems: cartItems,
    addItem: addItemToBucketHandler,
    removeItem: removeItemToBucketHandler,
    changeQuantity: changeQuantity,
    isLoggedIn : isUserLoggedIn,
    logIn : handlerOnLogIn,
    logOut : handlerOnLogOut,
  };

  return (
    <CartContext.Provider value={cartContextApi}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
