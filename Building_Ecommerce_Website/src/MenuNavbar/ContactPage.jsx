import axios from "axios";
import { useContext, useRef } from "react";
import classes from "./ContactPage.module.css";
import CartContext from "../store/CartContext";

const ContactPage = () => {

  const {addContactServer} = useContext(CartContext);

  const userName = useRef();
  const userEmail = useRef();
  const userPhone = useRef();

  const handlerOnContactSubmit = async(event) => {
    event.preventDefault();

    const contactDetails = {
      userNameRef: userName.current.value,
      userEmailRef: userEmail.current.value,
      userPhoneRef: userPhone.current.value,
    };
    
     
    try {
      const response = await axios.post(`https://crudcrud.com/api/d2963820c4d44f8bb0c0c90f03ad3f30/shivaji`,contactDetails);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  
    userName.current.value = "";
    userEmail.current.value = "";
    userPhone.current.value = "";
  };

  return (
    <>
      <h2> 24*7 We are available for you.</h2>
      <h3> Feel free to Contact Us.</h3>
      <div className={classes.contact_div}>
        <form
          className={classes.contact_form__div}
          onSubmit={handlerOnContactSubmit}
        >
          <label htmlFor="username"> UserName </label>
          <input type="text" id="username" name="username" ref={userName} className="form-control"/>

          <label htmlFor="emaiID"> Email ID </label>
          <input type="email" id="emaiID" name="emaiID" ref={userEmail} 
          className="form-control"/>

          <label htmlFor="PhoneNumber"> Phone Number </label>
          <input
            type="number"
            id="PhoneNumber"
            name="PhoneNumber"
            ref={userPhone}
            className="form-control"
          />

          <div>
            <button type="submit" className={classes.btn_contact}> contact us </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
