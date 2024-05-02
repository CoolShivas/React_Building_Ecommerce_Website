import classes from "./ProductDetail.module.css";
import { useContext, useState } from "react";
import CartContext from "../store/CartContext";

const ProductDetail = () => {
  const { itemsAvailable } = useContext(CartContext);

  const [fixImage, setFixImage] = useState(itemsAvailable.imageUrl);

  return (
    <div className={classes.product_page__div}>
      <div className={classes.grid_three__columns}>
        
          <div className={classes.product_images}>
            {itemsAvailable.map((zrr) => {
              return (
                <li key={zrr.id}>
                  <img
                    src={zrr.imageUrl}
                    alt="image not found"
                    onClick={() => {
                      setFixImage(zrr.imageUrl);
                    }}
                  />
                </li>
              );
            })}
          </div>

          <div className="product_single__image">
            <img src={fixImage} alt="image not found" style={{width:"150px", height:"150px"}}/>
          </div>

          <div className={classes.product_details}>
            <p> Stars & Rating </p>
            <p> Reviews </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              accusamus corporis quaerat, quibusdam exercitationem eligendi
              magni veritatis. Quaerat, impedit distinctio! Voluptates nam quia
              eum odit.
            </p>
            <p> Marvolous </p>
          </div>
        
      </div>
    </div>
  );
};

export default ProductDetail;
