import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Bucket from "../Cart/Bucket";
import classes from "./Navbar.module.css";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

const Navbar = ({ showBucketABC }) => {
  const { isLoggedIn, logOut } = useContext(CartContext);

  return (
    <div className={classes.navbar}>
          
          
          <NavLink to="/" className={classes.anchor}>
            home
          </NavLink>

          <NavLink to="/auth" className={classes.anchor}>
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

         {/* {isLoggedIn && <Bucket showBucketXYZ={showBucketABC}></Bucket>}

         {!isLoggedIn && <NavLink to="/auth" className={classes.anchor}>
            login
          </NavLink>} */}

          {/* {isLoggedIn && <NavLink to="/" className={classes.anchor}
          onClick={()=>{logOut()}}
          >
            logout
          </NavLink>} */}

          {isLoggedIn && <li>
            <button onClick={logOut()}> LogOut 
            </button>
          </li>}



    </div>
  );
};

export default Navbar;
