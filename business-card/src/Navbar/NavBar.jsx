import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShowContext } from "../Context/ShowContext";
import "./NavBar.css";

const NavBar = () => {
  const { show, setShow } = useContext(ShowContext);

  return (
    <nav className="navBar">
      <div className="navBar__container">
        <ul className="navBar__menu">
          <li className="navBar__item">
            <Link
              to="/"
              className="navBar__links"
              onClick={() => setShow(false)}
            >
              About
            </Link>
          </li>

          <li className="navBar__item">
            <Link
              to="/"
              className="navBar__links"
              onClick={() => setShow(!show)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
