import {createPortal} from "react-dom";
import classes from "./ModalOverlay.module.css";


const Backdrop = (props) =>{
    return <div className={classes.backdrop} onClick={props.hideBucketABC}></div>
}


const Modal = (props) =>{
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}


const portalElement = document.getElementById("overlay");


const ModalOverlay = (props) =>{
    return <>
    {createPortal(<Backdrop hideBucketABC={props.hideBucketABC}></Backdrop>, portalElement)}
    {createPortal(<Modal> {props.children} </Modal>, portalElement)}
    
    </>
    
}

export default ModalOverlay;