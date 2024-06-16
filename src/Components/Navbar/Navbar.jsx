import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import LogoSrc from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="bg-gray-50">
      <FlipNav />
      <div className="" />
    </div>
  );
};

const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-black p-4 border-b-[1px] border-black flex items-center justify-between relative">
      <NavLeft setIsOpen={setIsOpen} />
      <NavRight />
      <NavMenu isOpen={isOpen} />
    </nav>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return <img className="w-10 h-10" src={LogoSrc} alt="JJ" />;
};

const NavLeft = ({ setIsOpen }) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-white text-2xl"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/kurumsal">
        <NavLink text="Kurumsal Seyahat" />
      </Link>
      <Link to="/organizasyonlar">
        <NavLink text="Organizasyonlar" />
      </Link>
      <Link to="/kamp">
        <NavLink text="JoJo Kamp" />
      </Link>
      <Link to="/egitim">
        <NavLink text="JoJo Eğitim" />
      </Link>
      <Link to="/vize">
        <NavLink text="Vize" />
      </Link>
      <Link to="/hakkimizda">
        <NavLink text="Hakkımızda & İletişim" />
      </Link>{" "}
    </div>
  );
};

const NavLink = ({ text }) => {
  return (
    <a
      href="#"
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-white">{text}</span>
        <span className="flex items-center h-[30px] text-violet-300">
          {text}
        </span>
      </motion.div>
    </a>
  );
};

const NavRight = () => {
  return (
    <div className="flex items-center gap-4">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-white text-black font-medium rounded-md whitespace-nowrap"
      >
        <a
          href="https://wa.me/+9005011417690"
          target="_blank"
          rel="noopener noreferrer"
        >
          İletişim
        </a>
      </motion.button>
    </div>
  );
};

const NavMenu = ({ isOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute z-30 p-4 bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4"
    >
      <Link to="/">
        <MenuLink text="Anasayfa" />
      </Link>
      <Link to="/kurumsal">
        <MenuLink text="Kurumsal Seyahat" />
      </Link>
      <Link to="/organizasyonlar">
        <MenuLink text="Organizasyonlar" />
      </Link>
      <Link to="/kamp">
        <MenuLink text="Jojo Kamp" />
      </Link>
      <Link to="/egitim">
        <MenuLink text="Jojo Eğitim" />
      </Link>
      <Link to="/vize">
        <MenuLink text="Vize" />
      </Link>
      <Link to="/hakkimizda">
        <MenuLink text="Hakkımızda & İletişim" />
      </Link>
    </motion.div>
  );
};

const MenuLink = ({ text }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href="#"
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-gray-950" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-gray-500">{text}</span>
        <span className="flex items-center h-[30px] text-indigo-600">
          {text}
        </span>
      </motion.div>
    </motion.a>
  );
};

export default Navbar;

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};
