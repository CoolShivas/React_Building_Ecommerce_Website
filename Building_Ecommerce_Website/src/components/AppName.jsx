import { CgPlayButtonO } from "react-icons/cg";
import classes from "./AppName.module.css";

const AppName = () => {
  return (
    <center>
      <div className={classes.generic}>
        <h1> The Generics </h1>
        <h4> Get our latest Album </h4>
        <span className={classes.appName_span}>
          <CgPlayButtonO />
        </span>
      </div>
    </center>
  );
};

export default AppName;
