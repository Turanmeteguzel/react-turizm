import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footerr from "../Components/Footer/Footerr";
import EgititimHero from "../Components/Egitim/EgitimHero";
import YurtdisiOrgCont from "../Components/Organizasyonlar/YurtdisiOrgCont";

const YurtdisiOrg = () => {
  return (
    <div>
      <Navbar />
      <EgititimHero title="Yurt Dışı Organizasyonlar" />
      <YurtdisiOrgCont />
      <Footerr />
    </div>
  );
};

export default YurtdisiOrg;
