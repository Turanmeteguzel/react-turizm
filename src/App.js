import "./App.css";
import JojoYurt from "./pages/JojoYurt";
import Anasayfa from "./routes/Anasayfa";
import Kurumsal from "./routes/Kurumsal";
import JojoYazOkulu from "./routes/JojoYazOkulu";
import Tatil from "./routes/Tatil";
import JojoEgitim from "./routes/JojoEgitim";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Vize from "./routes/Vize";
import Hakkimizda from "./routes/Hakkimizda";
import Organizasyonlar from "./routes/Organizasyonlar";
import { AnimatePresence } from "framer-motion";
import YurticiOrg from "./routes/YurticiOrg";
import YurtdisiOrg from "./routes/YurtdisiOrg";
import Istanbul from "./routes/Istanbul";
import YurticiTurlar from "./routes/YurticiTurlar";

const App = () => {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route exact path="/" Component={Anasayfa} />
          <Route path="/vize" Component={Vize} />
          <Route path="/kurumsal" Component={Kurumsal} />
          <Route path="/kamp" Component={Tatil} />
          <Route path="/hakkimizda" Component={Hakkimizda} />
          <Route path="/yurtdisi" Component={JojoYurt} />
          <Route path="/yazokulu" Component={JojoYazOkulu} />
          <Route path="/egitim" Component={JojoEgitim} />
          <Route path="/organizasyonlar" Component={Organizasyonlar} />
          <Route path="/yurticiorganizasyonlar" Component={YurticiOrg} />
          <Route path="/yurtdisiorganizasyonlar" Component={YurtdisiOrg} />
          <Route path="/istanbulsehirgezileri" Component={Istanbul} />
          <Route path="/yurticiturlaricerik" Component={YurticiTurlar} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
};

export default App;
