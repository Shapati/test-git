import React from "react";
import { Decorator } from "./decorators/Decorator";
import Footer from "./Footer/Footer";
import { IntroSection } from "./IntroSection/IntroSection";
import { Testimonials } from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <IntroSection />
      <Decorator />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
