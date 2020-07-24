import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

const Navbar = (props) => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src="netflix-logo.png" alt="Netflix Logo" />
      <div className="nav__avatar--background">
        {" "}
        <img src="user-icon.png" alt="" className="nav__avatar" />
      </div>
    </div>
  );
};

export default Navbar;
