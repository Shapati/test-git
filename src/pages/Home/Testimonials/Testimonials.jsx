import { useState } from "react";
import { Testimonial } from "../../../data/Testimonial";
import "./Testimonials.css";
export const Testimonials = () => {
  const { testimonials } = Testimonial();

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
    <div className="testimonial">
      <div className="testi-box-container">
        {first && (
          <div className="testi-box">
            <div className="test-img"></div>
            <div className="testi-body">
              <p>
                I have used quite a number of platforms to acheive my aim but
                all no avail until a friend introduced me to lektore, with their
                array of very knowledgeable tutros, i was able to overcome a
                long term barrier and i made good prgress in English sentences
                and pronounciation
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
          <div className="testi-box">
            <div className="test-img"></div>
            <div className="testi-body">
              <p>
                I joined Lektore and my public speaking and overall knowledge in
                English improved
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
          <div className="testi-box">
            <div className="test-img"></div>
            <div className="testi-body">
              <p>
                I have used quite a number of platforms to acheive my aim but
                all no avail until a friend introduced me to lektore, with their
                array of very knowledgeable tutros, i was able to overcome a
                long term barrier and i made good prgress in English sentences
                and pronounciation
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
          <div className="testi-box">
            <div className="test-img"></div>
            <div className="testi-body">
              <p>
                I have used quite a number of platforms to acheive my aim but
                all no avail until a friend introduced me to lektore, with their
                array of very knowledgeable tutros, i was able to overcome a
                long term barrier and i made good prgress in English sentences
                and pronounciation
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
    </div>
  );
};
