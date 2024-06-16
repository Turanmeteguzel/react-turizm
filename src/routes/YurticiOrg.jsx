import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footerr from "../Components/Footer/Footerr";
import EgititimHero from "../Components/Egitim/EgitimHero";
import YurticiOrgCont from "../Components/Organizasyonlar/YurticiOrgCont";
import transition from "../transition";

const YurticiOrg = () => {
  return (
    <div>
      <Navbar />
      <EgititimHero title="Yurt İçi Organizasyonlar" />
      <YurticiOrgCont />
      <Footerr />
    </div>
  );
};

export default transition(YurticiOrg);
