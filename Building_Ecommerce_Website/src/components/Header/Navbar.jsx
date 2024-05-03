import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Bucket from "../Cart/Bucket";
import classes from "./Navbar.module.css";

const Navbar = ({ showBucketABC }) => {
  return (
    <div className={classes.navbar}>

      <NavLink to="/" className={classes.anchor}>
        home
      </NavLink>
      
      <NavLink to="/store" className={classes.anchor}>
        store
      </NavLink>

      <NavLink to="/about" className={classes.anchor}>
        about
      </NavLink>

      <NavLink to="/contact" className={classes.anchor}>
        contact
      </NavLink>

      <Bucket showBucketXYZ={showBucketABC}></Bucket>

      <NavLink to="/auth" className={classes.anchor}>
        login
      </NavLink>


    </div>
  );
};

export default Navbar;
