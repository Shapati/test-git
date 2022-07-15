import React from "react";
import Footer from "./Footer/Footer";
import { IntroSection } from "./IntroSection/IntroSection";
import { Testimonials } from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <IntroSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
