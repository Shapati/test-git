import { useState, useEffect } from "react";
import { Testimonial } from "../../../data/Testimonial";
import "./Testimonials.css";
import { Fade, Flip } from "react-reveal";
import AOS from "aos";
import "aos/dist/aos.css";
export const Testimonials = () => {
  const { testimonials } = Testimonial();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);

  const showFirst = () => {
    setFirst(true);
    setSecond(false);
    setThird(false);
    setFourth(false);
  };

  const showSecond = () => {
    setFirst(false);
    setSecond(true);
    setThird(false);
    setFourth(false);
  };

  const showThird = () => {
    setFirst(false);
    setSecond(false);
    setThird(true);
    setFourth(false);
  };
  const showFourth = () => {
    setFirst(false);
    setSecond(false);
    setThird(false);
    setFourth(true);
  };

  return (
    <div className="testimonial-container">
      <p className="testi-heading">
        See what some of our customers are saying about <span>LEKTORE</span>
      </p>
      <div className="testimonial">
        <div className="previous">
          {first && (
            <div onClick={() => showFourth()}>
              <img src="./assets/prev.png" alt="" />{" "}
            </div>
          )}
          {second && (
            <div onClick={() => showFirst()}>
              <img src="./assets/prev.png" alt="" />{" "}
            </div>
          )}
          {third && (
            <div onClick={() => showSecond()}>
              <img src="./assets/prev.png" alt="" />{" "}
            </div>
          )}
          {fourth && (
            <div onClick={() => showThird()}>
              <img src="./assets/prev.png" alt="" />{" "}
            </div>
          )}
        </div>
        <div className="testi-box-container">
          {first && (
            <div className="testi-box" data-aos="flip-up">
              <div className="testi-img">
                <img src="./assets/person1.png" alt="" />
              </div>
              <div className="testi-body">
                <p>
                  I have used quite a number of platforms to acheive my aim but
                  all no avail until a friend introduced me to lektore, with
                  their array of very knowledgeable tutros, i was able to
                  overcome a long term barrier and i made good prgress in
                  English sentences and pronounciation
                </p>
              </div>
              <div className="testi-name">
                <h4>Suzie Patricia </h4>
              </div>
              <div className="testi-occupation">
                <h5> Marketer </h5>
              </div>
            </div>
          )}
          {second && (
            <div className="testi-box" data-aos="flip-up">
              <div className="testi-img">
                <img src="./assets/person2.png" alt="" />
              </div>
              <div className="testi-body">
                <p>
                  I joined Lektore and my public speaking and overall knowledge
                  in English improved
                </p>
              </div>
              <div className="testi-name">
                <h4> Micheal Sandler</h4>
              </div>
              <div className="testi-occupation">
                <h5>Student</h5>
              </div>
            </div>
          )}
          {third && (
            <div className="testi-box" data-aos="flip-up">
              <div className="testi-img">
                <img src="./assets/person3.png" alt="" />
              </div>
              <div className="testi-body">
                <p>
                  I have used quite a number of platforms to acheive my aim but
                  all no avail until a friend introduced me to lektore, with
                  their array of very knowledgeable tutros, i was able to
                  overcome a long term barrier and i made good prgress in
                  English sentences and pronounciation
                </p>
              </div>
              <div className="testi-name">
                <h4> Johnson Adams </h4>
              </div>
              <div className="testi-occupation">
                <h5>Banker</h5>
              </div>
            </div>
          )}
          {fourth && (
            <div className="testi-box " data-aos="flip-up">
              <div className="test-img"></div>
              <div className="testi-body">
                <p>
                  I have used quite a number of platforms to acheive my aim but
                  all no avail until a friend introduced me to lektore, with
                  their array of very knowledgeable tutros, i was able to
                  overcome a long term barrier and i made good prgress in
                  English sentences and pronounciation
                </p>
              </div>
              <div className="testi-name">
                <h4> Cynthia Bade </h4>
              </div>
              <div className="testi-occupation">
                <h5> Student </h5>
              </div>
            </div>
          )}
        </div>
        <div className="next">
          {first && (
            <div onClick={() => showSecond()}>
              <img src="./assets/next.png" alt="" />{" "}
            </div>
          )}
          {second && (
            <div onClick={() => showThird()}>
              <img src="./assets/next.png" alt="" />{" "}
            </div>
          )}
          {third && (
            <div onClick={() => showFourth()}>
              <img src="./assets/next.png" alt="" />{" "}
            </div>
          )}
          {fourth && (
            <div onClick={() => showFirst()}>
              <img src="./assets/next.png" alt="" />{" "}
            </div>
          )}
        </div>
      </div>
      <div className="circle-container">
        <div
          className="circle"
          style={{
            backgroundColor: first ? "#4C8FDF" : "#f8f8f8",
          }}
        ></div>
        <div
          className="circle"
          style={{
            backgroundColor: second ? "#4C8FDF" : "#f8f8f8",
          }}
        ></div>
        <div
          className="circle"
          style={{
            backgroundColor: third ? "#4C8FDF" : "#f8f8f8",
          }}
        ></div>
        <div
          className="circle"
          style={{
            backgroundColor: fourth ? "#4C8FDF" : "#f8f8f8",
          }}
        ></div>
      </div>
    </div>
  );
};
