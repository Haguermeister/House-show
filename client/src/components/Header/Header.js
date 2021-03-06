import React from "react";
import { Nav } from "reactstrap";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = (props) => {
  return (
    <div className="navbar  navbar-light">
      <Nav className="w-100 d-flex flex-row w-100">
        <NavLink
          to={"/"}
          className="d-flex nav-link col-3 mx-auto justify-content-center"
        >
          <img alt="HouseShow Logo" src="./images/houseshow-logo-large.png" />
        </NavLink>
      </Nav>
    </div>
  );
};

export default Header;
