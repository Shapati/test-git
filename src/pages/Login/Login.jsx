import { NavLink } from "react-router-dom";
import { useState,useRef } from "react";

import "./Login.css";
export const Login = () => {
  const [pass, setPass] = useState(true);
  const [passType, setPassType] = useState("password");
  const [err,setErr] = useState(false)
  

  const email = useRef()
  const togglePass = () => {
    setPass(!pass);
    if (!pass) {
      setPassType("password");
    }
    if (pass) {
      setPassType("text");
    }
  };

  const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/  

  const emailKeyUp = () => {
    if(emailRegEx.test(email.current.value)){
      setErr(false)
    }else{
      setErr(true)
    }

    if(email.current.value === ''){
      setErr(false)
    }
  }

  return (
    <div className="login-container">
      <div className="container-back">
        <form>
          <div className="login">
            <div className="lektoreimg">
              <img src="./assets/frame.jpg" alt="" />
            </div>
            <p>
              Log in to <span> LEKTORE </span>
            </p>
            <p>
              Dont have an account? <NavLink to="/">Sign up</NavLink>{" "}
            </p>

            <div className="form-group">
              <label>Username or Email</label>
              <input type="email" ref={email} onKeyUp={emailKeyUp}  />
              <img src="./assets/username.svg" alt=""  />
            </div>
            {err && <p className="error">please enter a valid email address</p>}
            <div className="form-group">
              <label>Password</label>
              <input type={passType} />
              <img
                src="./assets/eyee.svg"
                alt=""
                onClick={() => togglePass()}
              />
            </div>

            <NavLink to="#" className='forgot'>Forgot your password?</NavLink>

            <button type="submit">Log in</button>

            <div className="lines">
              <div className="line"></div>
              <p>Or Continue With</p>
              <div className="line"></div>
            </div>

            <div className="images">
              <img src="./assets/google.svg" alt="google" />
              <img src="./assets/facebook.svg" alt="facebook" />
              <img src="./assets/linkedin.svg" alt="linkedin" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
