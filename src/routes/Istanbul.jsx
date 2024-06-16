import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import TatilHero from "../Components/Tatil/TatilHero";
import Footerr from "../Components/Footer/Footerr";
import BasketContent from "../Components/Tatil/BasketContent";

const Istanbul = () => {
  return (
    <div>
      <Navbar />
      <TatilHero title="Basketbol Kampları" />
      <BasketContent />
      <Footerr />
    </div>
  );
};

export default Istanbul;
