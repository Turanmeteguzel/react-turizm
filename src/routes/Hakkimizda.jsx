import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footerr from "../Components/Footer/Footerr";
import HakkimizHero from "../Components/Hakkimizda/HakkimizHero";
import transition from "../transition";
import HakkimizContent from "../Components/Hakkimizda/HakkimizContent";
import HakkimizArk from "../Components/Hakkimizda/HakkimizArk";
import IletisimIcon from "../Components/Hakkimizda/IletisimIcon";
import Mail from "../Components/Hakkimizda/Mail";
import Map from "../Components/Hakkimizda/Map";
import Reference from "../Components/Hakkimizda/Reference";

const Hakkimizda = () => {
  return (
    <>
      <Navbar />
      <HakkimizHero />
      <HakkimizContent />
      <HakkimizArk />
      <Mail />
      <Map />
      <Reference />
      <IletisimIcon />
      <Footerr />
    </>
  );
};

export default transition(Hakkimizda);
