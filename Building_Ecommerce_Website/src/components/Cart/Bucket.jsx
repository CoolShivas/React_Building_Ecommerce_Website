
import classes from "./Bucket.module.css";

const Bucket = () =>{
    return <>
    <button className={classes.btn_cart} onClick={()=>console.log('cart btn clicked')}>
        <span className={classes.cart_only}>  Cart  </span>
<span className={classes.badge}> 0 </span>
</button>
    </>
    
}

export default Bucket;