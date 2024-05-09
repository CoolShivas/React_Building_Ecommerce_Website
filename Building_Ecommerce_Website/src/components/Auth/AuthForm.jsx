import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// import { useNavigate } from "react-router-dom";
import { useContext, useRef, useState} from "react";
import classes from "./AuthForm.module.css";
import CartContext from "../../store/CartContext";


const AuthForm = () => {

  const [isLogIn, setIsLogIn] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const myUseHistory = useHistory();

  const {logIn} = useContext(CartContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogIn((prevState) => !prevState);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    setIsLoading(true);
    let url;

    if(isLogIn)
      {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBkSIZmpvU3onXN_v9XWgPWXXnycAeH83w`
      }
      else{
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBkSIZmpvU3onXN_v9XWgPWXXnycAeH83w`
      }

    fetch(url,{
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
      setIsLoading(false);
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

      const yrr =  enteredEmail.split("");
      console.log(yrr);
      const yrrFilter = yrr.filter((xrr)=>{
        return xrr !== "@" && xrr !== ".";
      });
      console.log(yrrFilter);
      const zrrFilter = yrrFilter.join("");
      console.log(zrrFilter);
      
      
      myUseHistory.replace("/store");
      // myUseHistory.replace("/product-detail");
    }).catch((error)=>{
      console.log(error);
      alert(error.message);
    })

    emailInputRef.current.value = '';
    passwordInputRef.current.value = '';

  };

  return (
    <section className={classes.auth}>
      <h1>{isLogIn ? "Login" : "Sign Up"}</h1>

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
          
        {!isLoading && <button> {isLogIn ? 'Login' : 'Create Account'} </button>}
           {isLoading && <p> Sending Request.... </p>}
          
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogIn ? "Create new account" : "Login with existing account"}
          </button>

        </div>
      </form>
    </section>
  );
};

export default AuthForm;
