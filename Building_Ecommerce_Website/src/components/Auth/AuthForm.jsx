import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import { useNavigate } from "react-router-dom";
import { useContext, useRef} from "react";
import classes from "./AuthForm.module.css";
import CartContext from "../../store/CartContext";


const AuthForm = () => {

  const myUseHistory = useHistory();

  const {logIn} = useContext(CartContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
    AIzaSyA3uDanIx3CS59VvW0SSdaaShcsZjapqno`,{
      method : "POST",
      body : JSON.stringify({
        email : enteredEmail,
        password : enteredPassword,
        returnSecureToken : true,
      }),
      headers : {
        "Content-type" : "application/json",
      }
    }).then((response)=>{
      console.log(response);
      if(response.ok)
      {
        return response.json();
      }
      else{
        return response.json().then((data)=>{
          let errMsg = 'Authentication Failed';
          // if(data && data.error && data.error.message)
          // {
          //   errMsg = data.error.message;
          // }
          // console.log(errMsg);
          throw new Error(errMsg);
        })
      }
    }).then((res)=>{
      console.log(res);
      logIn(res.idToken);
      // myUseHistory.replace("/store");
      myUseHistory.replace("/product-detail");
    }).catch((error)=>{
      console.log(error);
      alert(error.message);
    })

    emailInputRef.current.value = '';
    passwordInputRef.current.value = '';

  };

  return (
    <section className={classes.auth}>
      <h1> Login </h1>

      <form onSubmit={submitFormHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.actions}>
          
          <button> Login </button> 

        </div>
      </form>
    </section>
  );
};

export default AuthForm;
