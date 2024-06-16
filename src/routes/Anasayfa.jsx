import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Question from "../Components/Question/Question";
import Sira from "../Components/Sira/Sira";
import StatusAna from "../Components/Stats/StatusAna";
import Testi from "../Components/Testimonials/Testi";
import Footerr from "../Components/Footer/Footerr";
import transition from "../transition";

const Anasayfa = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Sira />
      <StatusAna />
      <Testi />
      <Question />
      <Footerr />
    </>
  );
};

export default transition(Anasayfa);
