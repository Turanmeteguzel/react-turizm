import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footerr from "../Components/Footer/Footerr";
import EgitimHero from "../Components/Egitim/EgitimHero";
import OrgContent from "../Components/Organizasyonlar/OrgContent";
import transition from "../transition";
const Organizasyonlar = () => {
  return (
    <>
      <Navbar />
      <EgitimHero title="Organizasyonlar" />
      <OrgContent />
      <Footerr />
    </>
  );
};

export default transition(Organizasyonlar);
