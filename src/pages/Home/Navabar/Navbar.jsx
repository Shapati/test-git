import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Navbar = () => {
  const first = useRef();

  useEffect(() => {
    AOS.init();
  }, []);

  const [firstDropdown, setFirstDropdown] = useState(false);
  const [secondDropdown, setSecondDropdown] = useState(false);
  const [thirdDropdown, setThirdDropdown] = useState(false);

  const firstDrop = () => {
    setFirstDropdown(!firstDropdown);
    setSecondDropdown(false);
    setThirdDropdown(false);
  };

  const resetDrop = () => {
    setFirstDropdown(false);
    setSecondDropdown(false);
    setThirdDropdown(false);
  };

  // if(firstDropdown){

  //     setTimeout(()=>{
  //         setFirstDropdown(false)
  //     },450)
  // }
  const secondDrop = () => {
    setSecondDropdown(!secondDropdown);
    setFirstDropdown(false);
    setThirdDropdown(false);
  };
  const thirdDrop = () => {
    setThirdDropdown(!thirdDropdown);
    setFirstDropdown(false);
    setSecondDropdown(false);
  };

  return (
    <div className="nav-container">
      <div className="Navbar">
        <div className="nav-left">
          <img src="./assets/Frame.jpg" alt="" />{" "}
          <NavLink to="/" onClick={() => resetDrop()}>
            LEKTOR
          </NavLink>
        </div>
        <div className="nav-right">
          <div className="tabs">
            <div className="dropdown" id="dropdown1">
              <NavLink to="#" onClick={() => firstDrop()}>
                Our Services
              </NavLink>
              {firstDropdown && (
                <ul className="swing-in-top-fwd" ref={first}>
                  <li>IELTS</li>
                  <li>Learn English Language</li>
                  <li>Professional Pathways</li>
                  <li>Elocution</li>
                </ul>
              )}
            </div>
            <div className="dropdown" id="dropdown2">
              <NavLink to="#" onClick={() => secondDrop()}>
                Who we Service
              </NavLink>
              {secondDropdown && (
                <ul className="swing-in-top-fwd">
                  <li>An immigrant</li>
                  <li>An Intending immigrant</li>
                  <li>A Business Partner</li>
                  <li>A Student</li>
                  <li>An Actor</li>
                </ul>
              )}
            </div>
            <div className="dropdown" id="dropdown3">
              <NavLink to="#" onClick={() => thirdDrop()}>
                pathways
              </NavLink>
              {thirdDropdown && (
                <ul className="swing-in-top-fwd">
                  <li>I am</li>
                </ul>
              )}
            </div>
            <NavLink to="/" onClick={() => resetDrop()}>
              Socials & Events
            </NavLink>
            <NavLink to="/" onClick={() => resetDrop()}>
              Contact
            </NavLink>
          </div>

          <div className="signUser">
            <NavLink to="/login" onClick={() => resetDrop()}>
              Tutor Login
            </NavLink>
            <NavLink to="/signup" onClick={() => resetDrop()}>
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
