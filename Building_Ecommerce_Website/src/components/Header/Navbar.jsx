import { NavLink } from "react-router-dom";
import Bucket from "../Cart/Bucket";
import classes from "./Navbar.module.css";

const Navbar = ({ showBucketABC }) => {
  return (
    <div className={classes.navbar}>
      {/* <a className={classes.anchor} href="/">
        home
      </a>
      <a className={classes.anchor} href="/store">
        store
      </a>
      <a className={classes.anchor} href="/about">
        about
      </a> */}

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
