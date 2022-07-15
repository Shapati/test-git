import React from "react";
import "./signup.css";
import logo from "../../assets/log.png";
import blur from "../../assets/blur.png";
import blurr from "../../assets/blurr.png";
import banner from '../../assets/banner.png';

function Signup() {
  return (
    <div className="container">
      <div className="banner">
        <img className="img" src={banner} alt="banner" />
      </div>
      <div className="inner-container">
        <div className="img1">
          <img src={logo} alt="" />
        </div>
        <img className="img2" src={blur} alt="" />
        <img className="img3" src={blurr} alt="" />
        <form action="">
          <h1 className="head">Sign Up</h1>
          <div className="name">
            <div className="first-name" id="firstName">
              <input
                className="form-control"
                id="firstname"
                type="text"
                placeholder="First name"
              />
            </div>
            <div className="last-name">
              <input
                className="form-control"
                id="lastname"
                type="text"
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="email">
            <input
              className="form-control-email"
              id="email"
              name="email"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="dropdwn">
            <div className="dropdown-country">
              <label for="cars"></label>
              <select name="country" id="country">
                <optgroup label="Country">
                  <option value="country">Country</option>
                </optgroup>
              </select>
            </div>
            <div className="dropdown-cartegory">
              <label for="cartegory"></label>
              <select name="cartegory" id="cartegory">
                <optgroup label="Cartegories">
                  <option value="cartegory">Cartegories</option>
                </optgroup>
              </select>
            </div>
          </div>

          <div className="username">
            <input
              className="form-control-username"
              id="username"
              name="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="password">
            <input
              className="form-control-password"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="password" id="pass">
            <input
              className="form-control-password"
              id="password"
              name="password"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="terms">
            <input className="checkbox" type="checkbox" />I agree to all{" "}
            <span>Terms and conditions.</span>{" "}
          </div>
          <button className="register" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
