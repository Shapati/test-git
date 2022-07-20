
import "./footer.css";
import { Fade } from "react-reveal";
import david from "../../../assets/david.png";
import jack from "../../../assets/jack.png";
import jon from "../../../assets/jon.png";
import mark from "../../../assets/mark.png";
import mary from "../../../assets/mary.png";
import sarah from "../../../assets/sarah.png";

const  Footer = ()=> {
  return (
    <div className="footer-container">
      <div className="footer">
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
        <Fade delay={300}><div className="div-wrapper">
          <div className="card-main">
            <img className="footer-img" src={jack} alt="" />
          </div>
          <div className="description">
            <p> Hi my name is Gabriel , Head of <br /> English studies at lektore </p>
          </div>
        </div>
        </Fade>
        <Fade delay={500}><div className="div-wrapper">
          <div className="card-main">
            <img src={mary} alt="" />
          </div>
          <div className="description">
            <p>
              Hello my name is suzie, an English <br /> tutor at lektore, im dedicated to <br /> solving any issue to English Studies
            </p>
          </div>
        </div>
        </Fade>
        <Fade delay={700}><div className="div-wrapper">
          <div className="card-main">
            <img src={sarah} alt="" />
          </div>
          <div className="description">
            <p>
            Hello, my name is Vanessa and im the assistant Head of English <br /> studies at Lektore.
            </p>
          </div>
        </div>
        </Fade>
        <Fade delay={900}><div className="div-wrapper">
          <div className="card-main">
            <img src={david} alt="" />
          </div>
          <div className="description">
            <p>
            Hello, my name is Michael, a tutor <br /> at lektore and i will help English <br /> dictions & Syntax    </p>
          </div>
        </div>
        </Fade>
        <Fade delay={1100}><div className="div-wrapper">
          <div className="card-main">
            <img src={mark} alt="" />
          </div>
          <div className="description">
            <p>
            Hello, my name is George and i <br /> will be helping you with the art of <br /> public speaking      </p>
          </div>
        </div>
        </Fade>
        <Fade delay={1300}><div className="div-wrapper">
          <div className="card-main">
            <img src={jon} alt="" />
          </div>
          <div className="description">
            <p>
              Hello my name is Augusto , im a <br /> tutor with lektore & i will help <br /> strenghten with your morphology <br /> & phonetics
            </p>
          </div>
        </div>
        </Fade>
      </div>
      </div>
    </div>
  );
}

export default Footer;
