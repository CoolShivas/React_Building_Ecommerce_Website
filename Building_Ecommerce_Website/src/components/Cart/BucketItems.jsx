import classes from "./BucketItems.module.css";
import ModalOverlay from "../../UI/ModalOverlay";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

const BucketItems = (props) => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);

  return (
    <ModalOverlay hideBucketABC={props.hideBucketABC}>
      <table className="table">
        <thead>
          <tr>
            <th> Poduct </th>
            <th> Image </th>
            <th> Price </th>
            <th> Quantity </th>
            <th> Button </th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((brr) => {
            return (
              <tr key={brr.idABC}>
                <th> {brr.titleABC} </th>
                <th>
                  <img src={brr.imageUrlABC} alt="cart items image not found" />
                </th>
                <th> Rs.{brr.priceABC}/- </th>
                <th> {brr.quantity} </th>
                <th>
                  <button className={classes.btn_remove}> Remove </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className={classes.accumulated_amt}>
        <span>Total Amount</span>
        <span> Rs. 150 /-</span>
      </div>

      <button
        onClick={props.hideBucketABC}
        className={classes.close_bucket__btn}
      >
        Close Bucket
      </button>
    </ModalOverlay>
  );
};

export default BucketItems;
