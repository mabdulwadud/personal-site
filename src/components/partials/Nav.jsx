// Nav.jsx
import React from "react";
import NavLink from "./NavLink";
import ContactButton from "./ContactButton";
import Logo from "./Logo";

function Nav(props) {
  return (
    <div>
      <div className="nav">
        <div className="nav-item">
          <Logo/>
        </div>
        <div className="nav-item">
          <NavLink name="about" />
          <NavLink name="work" />
          <NavLink name="blog" />
        </div>

        <div className="nav-item">
          <ContactButton />
        </div>
      </div>
    </div>
  );
}

export default Nav;
