import axios from "axios";
import CartIcon from "./CartIcon";
import classes from "./Bucket.module.css";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

const Bucket = ({ showBucketXYZ }) => {
  const { cartItems, currEmail } = useContext(CartContext);

  let qty = 0;
  cartItems.forEach((arr) => {
    return (qty = qty + Number(arr.quantity));
  });

  const handlerOnShowBucket = () =>{
    
    showBucketXYZ();

    axios.get(`https://crudcrud.com/api/3da97b9609784182ab428b91f1be7ec0/${currEmail}`)
    .then((res)=>{
      console.log(res);
      showBucketXYZ();
    })
    .catch((err)=>{
      console.log(err);
    })
    

  };

  return (
    <div className={classes.cart_with_badge}>
      <button className={classes.btn_cart} onClick={handlerOnShowBucket}>
        <CartIcon></CartIcon>
        <span className={classes.cart_only}> Cart </span>
      </button>
      {/* <span className={classes.badge}> 0 </span> */}
      <span className={classes.badge}> {qty} </span>
    </div>
  );
};

export default Bucket;
