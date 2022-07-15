import React from "react";
import "./footer.css";
import david from "../../../assets/david.png";
import jack from "../../../assets/jack.png";
import jon from "../../../assets/jon.png";
import mark from "../../../assets/mark.png";
import mary from "../../../assets/mary.png";
import sarah from "../../../assets/sarah.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="left-page">
        <div className="footer-text">
          <div className="headline">
            <h1 className="footer-h1">
              Register with any of our <br />
              excellent <span style={{ color: "#2E7DDA" }}>Tutors</span>{" "}
              globally
            </h1>
          </div>
          <div className="footer-paragraph">
            <p>
              Our array of knowledeable tutors globally <br /> are always at
              your service to help you take <br /> that big step and succeed.
            </p>
          </div>
          <button className="footer-btn">Register</button>
        </div>
      </div>
      <div className="right-page">
        <div className="div-wrapper">
          <div className="card-main">
            <img className="footer-img" src={david} alt="" />
          </div>
          <div className="description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          </div>
        </div>

        <div className="div-wrapper">
          <div className="card-main">
            <img src={jack} alt="" />
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              accusamus!
            </p>
          </div>
        </div>
        <div className="div-wrapper">
          <div className="card-main">
            <img src={jon} alt="" />
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum,
              voluptate?
            </p>
          </div>
        </div>
        <div className="div-wrapper">
          <div className="card-main">
            <img src={mark} alt="" />
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
              enim.
            </p>
          </div>
        </div>
        <div className="div-wrapper">
          <div className="card-main">
            <img src={sarah} alt="" />
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis, totam.
            </p>
          </div>
        </div>
        <div className="div-wrapper">
          <div className="card-main">
            <img src={mary} alt="" />
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere,
              doloremque?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
