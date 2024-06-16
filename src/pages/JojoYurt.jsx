import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import EgitimHero from "../Components/Egitim/EgitimHero";
import EgitimYurtDisiCard from "../Components/Egitim/EgitimYurtDisiCard";
import Footerr from "../Components/Footer/Footerr";

const JojoYurt = () => {
  return (
    <div>
      <Navbar />
      <EgitimHero title="Jojo Yurtdışı" />
      <EgitimYurtDisiCard />
      <Footerr />
    </div>
  );
};

export default JojoYurt;
