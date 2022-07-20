import React from "react";
import { Decorator } from "./decorators/Decorator";
import Footer from "./Footer/Footer";
import { IntroSection } from "./IntroSection/IntroSection";
import { Testimonials } from "./Testimonials/Testimonials";
import ScrollToTop from "react-scroll-to-top";
import TestimonialCard from "./TestimonialCard/TestimonialCard";

const Home = () => {
  return (
    <div>
      <ScrollToTop top={500} color="white" style={{display: 'flex', flexDirection: 'column' , justifyContent:'center', alignItems:'center' , borderRadius:'50%',width:"55px", height:'55px' , backgroundColor:'#4C8FDF'}  }/>
      <IntroSection />
      <Decorator />
      <Testimonials />
      <TestimonialCard />
      <Footer />
    </div>
  );
};

export default Home;
