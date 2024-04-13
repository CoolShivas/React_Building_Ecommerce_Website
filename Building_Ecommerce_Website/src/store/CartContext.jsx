import { createContext } from "react";

const CartContext = createContext({
  itemsAvailable: [],
  totalAmount: 0,
  addItems: (latestItem) => {},
  removeItems: (id) => {},
  changeQuantity: (id, value) => {},
  cartItems: [],
});
export default CartContext;
