import CartIcon from "./CartIcon";
import classes from "./Bucket.module.css";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

const Bucket = ({ showBucketXYZ }) => {
  const { cartItems } = useContext(CartContext);

  //   let badgeQty = 0;
  //   cartItems.forEach((crr) => {
  //     badgeQty = badgeQty + Number(crr.badgeQty);
  //   });

  return (
    <div className={classes.cart_with_badge}>
      <button className={classes.btn_cart} onClick={showBucketXYZ}>
        <CartIcon></CartIcon>
        <span className={classes.cart_only}> Cart </span>
      </button>
      <span className={classes.badge}> 0 </span>
      {/* <span className={classes.badge}> {numberOfCartProducts} </span> */}
      {/* {console.log(badgeQty)} */}
      {/* <span className={classes.badge}> {badgeQty} </span> */}
    </div>
  );
};

export default Bucket;
