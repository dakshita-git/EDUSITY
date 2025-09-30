import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu_icon from "../../assets/menu-icon.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="University Logo" className="logo" />
      <ul className={mobileMenu ? "open" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} duration={500} spy={true} offset={-70}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="program"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} spy={true} offset={-70}>
            About us
          </Link>
        </li>
        <li>
          <Link
            to="campus"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            Campus
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            className="btn"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
