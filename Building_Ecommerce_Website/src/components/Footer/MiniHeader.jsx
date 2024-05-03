import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
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
          {/* <span className={classes.single_icons}>
            <FiYoutube />
          </span>
          <span className={classes.single_icons}>
            <FaFacebook />
          </span>
          <span className={classes.single_icons}>
            <FaTwitter />
          </span> */}
          <a href="https://www.youtube.com/" target="_blank" className={classes.single_icons}>
          <FiYoutube />
          </a>
          <a href="https://www.facebook.com/" target="_blank" className={classes.single_icons}>
          <FaFacebook />
          </a>
          <a href="https://twitter.com/i/flow/login" target="_blank" className={classes.single_icons}>
          <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MiniHeader;
