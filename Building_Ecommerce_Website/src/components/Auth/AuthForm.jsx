import axios from "axios";
import { useRef, useState } from "react";
import classes from "./AuthForm.module.css";

const AuthForm = () => {
  const [isLogin, setIsLogIn] = useState(true);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogIn(prevState => !prevState);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    let url;
    if(isLogin)
    {
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]`;
    }
    else{
        url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]`
    }
    axios.post(url,{
        email : enteredEmail,
        password : enteredPassword,
    }).then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error);
    })

  };

  return (
    <section className={classes.auth}>
      <h1> {isLogin ? "Login" : "SignUp"} </h1>

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
          <button> {isLogin ? "Login" : "Create Account"} </button>

          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
