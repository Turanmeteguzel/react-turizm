import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import VizeHero from "../Components/Vize/VizeHero";
import VizeDetay from "../Components/Vize/VizeDetay";
import VizeFaq from "../Components/Vize/VizeFaq";
import Footerr from "../Components/Footer/Footerr";
import transition from "../transition";

const Vize = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <VizeHero />
      <VizeDetay />
      <VizeFaq />
      <Footerr />
    </div>
  );
};

export default transition(Vize);
