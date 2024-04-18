import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";
import classes from "./MiniHeader.module.css";

const MiniHeader = () => {
  return (
    <div className={classes.footer_container}>
      <div className={classes.grid_two__column}>
        <div className={classes.heading_content}>
          <span> The Generics </span>
        </div>
        <div className={classes.content_icons}>
          <span className={classes.single_icons}>
            <FiYoutube />
          </span>
          <span className={classes.single_icons}>
            <FaFacebook />
          </span>
          <span className={classes.single_icons}>
            <FaTwitter />
          </span>
        </div>
      </div>
    </div>
  );
};

export default MiniHeader;
