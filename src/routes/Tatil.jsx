import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footerr from "../Components/Footer/Footerr";
import transition from "../transition";
import TatilHero from "../Components/Tatil/TatilHero";
import YurticiContent from "../Components/Tatil/YurticiContent";

const Tatil = () => {
  return (
    <div>
      <Navbar />
      <TatilHero title="Jojo Kamp" />
      <YurticiContent />
      <Footerr />
    </div>
  );
};

export default transition(Tatil);
