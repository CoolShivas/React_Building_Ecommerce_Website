import CartIcon from "./CartIcon";
import classes from "./Bucket.module.css";

const Bucket = ({ showBucketXYZ }) => {
  return (
    <div className={classes.cart_with_badge}>
      <button className={classes.btn_cart} onClick={showBucketXYZ}>
        <CartIcon></CartIcon>
        <span className={classes.cart_only}> Cart </span>
      </button>
      <span className={classes.badge}> 0 </span>
    </div>
  );
};

export default Bucket;
