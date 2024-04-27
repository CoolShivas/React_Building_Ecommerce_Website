import classes from "./ProductPage.module.css";

const ProductPage = () => {
  return (
    <div className={classes.product_page__div}>
      <div className={classes.grid_three__columns}>
        <div className={classes.grid_two__columns}>
          <div className={classes.product_images}>
            <img
              src="../../public/images/Ear_Pods.webp"
              alt="image not found"
            />
            <img src="../../public/images/Ipod.webp" alt="image not found" />
            <img
              src="../../public/images/Pocket_Min_Printer.webp"
              alt="image not found"
            />
            <img
              src="../../public/images/SmartPhone.avif"
              alt="image not found"
            />
          </div>
          <div className={classes.product_single__image}>
            <img
              src="../../public/images/Pocket_Min_Printer.webp"
              alt="image not found"
            />
          </div>
        </div>
        <div className="product_reviews">
          <p> Good </p>
          <p> Bad </p>
          <p> Fantastic </p>
          <p> Marvolous </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
