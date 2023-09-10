import React from "react";
import logo from "../images/logo.svg";

import { PageLinks } from "../data";
import { socialLinks } from "../data";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/*<!-- left this comment on purpose -->*/}
        <ul className="nav-links" id="nav-links">
          {/*<!-- map over the PageLinks array -->*/}
          {PageLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <li key={id}>
                <a href={href} className="nav-link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {/*<!-- map over the socialLinks array -->*/}
          {socialLinks.map((link) => {
            const { id, href, icon } = link;
            return (
              <li key={id}>
                <a href={href} className="nav-icon">
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
