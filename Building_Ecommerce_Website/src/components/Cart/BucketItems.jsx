import { IoIosAddCircleOutline } from "react-icons/io";
import { SlMinus } from "react-icons/sl";
import classes from "./BucketItems.module.css";
import ModalOverlay from "../../UI/ModalOverlay";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

const BucketItems = (props) => {
  const { cartItems, changeQuantity } = useContext(CartContext);
  // console.log(cartItems);

  const totalAccumulatedAmt = cartItems.reduce((acc, curr) => {
    return acc + parseFloat(curr.price * curr.quantity);
  }, 0);

  const incrementQtyHandler = (id) => {
    changeQuantity(id, 1);
    // console.log(id, "bucket id");
  };

  const decrementQtyHandler = (id) => {
    changeQuantity(id, -1);
  };

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
              <tr key={brr.id}>
                <th> {brr.title} </th>
                <th>
                  <img src={brr.imageUrl} alt="cart items image not found" />
                </th>
                <th> Rs.{brr.price}/- </th>
                {/* <th> {brr.quantityABC} </th> */}
                <th>
                  <button onClick={() => decrementQtyHandler(brr.id)}>
                    <SlMinus />
                  </button>
                  {brr.quantity}
                  <button onClick={() => incrementQtyHandler(brr.id)}>
                    <IoIosAddCircleOutline />
                  </button>
                </th>
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
        {/* <span> Rs. 150 /-</span> */}
        <span> Rs.{totalAccumulatedAmt}/- </span>
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
