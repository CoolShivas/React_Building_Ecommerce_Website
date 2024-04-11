import Bucket from "../Cart/Bucket";
import classes from "./Navbar.module.css"

const Navbar = ({showBucketABC}) =>{

    return <div className={classes.navbar}>
    <a className={classes.anchor} href="/"> home </a>
    <a className={classes.anchor} href="/store"> store </a>
    <a className={classes.anchor} href="/about"> about </a>
    <Bucket showBucketXYZ={showBucketABC}></Bucket>
    </div>
}


export default Navbar;