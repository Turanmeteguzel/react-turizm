import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import KurumHero from "../Components/Kurum/KurumHero";
import KurumCard from "../Components/Kurum/KurumCard";
import Footerr from "../Components/Footer/Footerr";
import transition from "../transition";

const Kurumsal = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <KurumHero />
      <KurumCard />
      <Footerr />
    </div>
  );
};

export default transition(Kurumsal);
