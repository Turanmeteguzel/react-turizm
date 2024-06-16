import React from "react";
import EgitimHero from "../Components/Egitim/EgitimHero";
import EgitimContent from "../Components/Egitim/EgitimContent";
import Navbar from "../Components/Navbar/Navbar";
import Footerr from "../Components/Footer/Footerr";
import Status from "../Components/Stats/Status";
import Carousel from "../Components/Carousel/Carousel";
import EgitimAnaCard from "../Components/Egitim/EgitimAnaCard";
import transition from "../transition";

const JojoEgitim = () => {
  return (
    <div>
      <Navbar />
      <EgitimHero title="Jojo Eğitim" />
      <EgitimContent />
      <Carousel />
      <Status
        stat1={29}
        suffix1=""
        subheading1="Ülke"
        stat2={180}
        suffix2=""
        subheading2="Okul"
        stat3={25000}
        suffix3=""
        subheading3="Öğrenci"
      />
      <EgitimAnaCard />
      <Footerr />
    </div>
  );
};

export default transition(JojoEgitim);
