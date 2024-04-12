import classes from "./BucketItems.module.css";
import ModalOverlay from "../../UI/ModalOverlay";

const BucketItems = (props) => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

  return (
    <ModalOverlay hideBucketABC={props.hideBucketABC}>
      <table className="table">
        <thead>
          <tr>
            <th> Poduct </th>
            <th> Price </th>
            <th> Quantity </th>
            <th> Total </th>
            <th> Button </th>
          </tr>
        </thead>
        <tbody>
          {cartElements.map((brr) => {
            return (
              <tr key={brr.title}>
                <th> {brr.title} </th>
                <th>
                  {" "}
                  <img
                    src={brr.imageUrl}
                    alt="cart items image not found"
                  />{" "}
                </th>
                <th> Rs.{brr.price}/- </th>
                <th> {brr.quantity} </th>
                <th>
                  {" "}
                  <button className={classes.btn_remove}> Remove </button>{" "}
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* <ul className={classes.second_ul__tag}>
        {cartElements.map((brr)=>{
            return <li key={brr.title}>
                Title: {brr.title}
              <img src={brr.imageUrl} alt="cart items image not found" />  Rs. {brr.price} /-  Qty: {brr.quantity}
              <button className={classes.btn_remove}> Remove </button>
            </li>
        })}
    </ul> */}

      <button onClick={props.hideBucketABC}> Close Bucket </button>
    </ModalOverlay>
  );
};

export default BucketItems;
