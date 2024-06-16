import React from "react";
import EgitimHero from "../Components/Egitim/EgitimHero";
import Navbar from "../Components/Navbar/Navbar";
import Footerr from "../Components/Footer/Footerr";
import EgitimCard from "../Components/Egitim/EgitimCard";
import transition from "../transition";

const JojoYazOkulu = () => {
  return (
    <div>
      <Navbar />
      <EgitimHero title="Jojo Yaz Okulları" />
      <EgitimCard />
      <Footerr />
    </div>
  );
};

export default transition(JojoYazOkulu);
