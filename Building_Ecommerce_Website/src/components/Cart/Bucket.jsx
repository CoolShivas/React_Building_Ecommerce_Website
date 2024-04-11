
import classes from "./Bucket.module.css";

const Bucket = ({showBucketXYZ}) =>{
    return <>
    <button className={classes.btn_cart} onClick={showBucketXYZ}>
        <span className={classes.cart_only}>  Cart  </span>
        <span className={classes.badge}> 0 </span>
    </button>
    </>
    
}

export default Bucket;