import { useState } from "react";
import CartContext from "./CartContext";


const productsArr = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    },
    
    {
    
    title: 'Blue Color',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    
    }
    
    ];
    
    
    
    
const CartProvider = (props) =>{

   const [addProductItems, setProductItems] = useState(productsArr);

   const addItemToBucketHandler = () =>{

   }

   const removeItemToBucketHandler = () =>{

   }

   const changeQuantity = () =>{

   }

   
const cartContextApi = {
    itemsAvailable : addProductItems,
    totalAmount : 0,
    addItem : addItemToBucketHandler,
    removeItem : removeItemToBucketHandler,
    changeQuantity : changeQuantity,
};


    return <CartContext.Provider value={cartContextApi}> 
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;