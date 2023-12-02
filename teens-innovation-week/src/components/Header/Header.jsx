import { useState, useRef } from "react";
import { MdOutlineMenu } from "react-icons/md";
import logoImage from "../../assets/images/logo2.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  const navRef = useRef(null);

  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    if (navOpen) {
      navRef.current.classList.remove("nav_closed");
    } else {
      navRef.current.classList.add("nav_closed");
    }
  };
  const handleToggleNav = (e) => {
    // e.preventDefault();
    setNavOpen(!navOpen);
    toggleNav();
  };
  const closeNav = () => {
    setNavOpen(false);
    toggleNav();
  };
  return (
    <header className="header">
      <img src={logoImage} alt="logo" width="180" className="logo" />
      <nav className="header__nav nav_closed" id="header__nav" ref={navRef}>
        <a href="/#home" onClick={closeNav} className="header__nav--link">
          home
        </a>
        <a href="/#about" onClick={closeNav} className="header__nav--link">
          About
        </a>
        <a href="/#objectives" onClick={closeNav} className="header__nav--link">
          objectives
        </a>
        <a href="/#sponsors" onClick={closeNav} className="header__nav--link">
          Sponsors
        </a>
        <a href="/#contact" onClick={closeNav} className="header__nav--link">
          Get in touch
        </a>
        <Link className="header__nav--link" onClick={closeNav} to="/speakers">
          speakers
        </Link>
        <Link className="header__nav--link" onClick={closeNav} to="/schedule">
          schedule
        </Link>
        <a
          href="https://forms.gle/bGjp6izcGZ5VKFdf7"
          target="_blank"
          className="header__nav--cta"
          onClick={closeNav}
        >
          book a slot
        </a>
      </nav>
      <button
        className="header__button"
        id="header__button"
        onClick={handleToggleNav}
      >
        <MdOutlineMenu />
      </button>
    </header>
  );
};
export default Header;
