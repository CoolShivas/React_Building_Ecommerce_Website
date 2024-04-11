import classes from "./Bucket.module.css";

const Bucket = () =>{
    return <button className={classes.btn_cart}>
        <span className={classes.cart_only}>  Cart  </span>
<span className={classes.badge}> 0 </span>
</button>
    
}

export default Bucket;