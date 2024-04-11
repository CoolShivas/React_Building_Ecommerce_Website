import classes from "./Navbar.module.css"

const Navbar = () =>{
    return <div className={classes.navbar}>
    <a className={classes.anchor} href="/"> home </a>
    <a className={classes.anchor} href="/store"> store </a>
    <a className={classes.anchor} href="/about"> about </a>
    </div>
}


export default Navbar;