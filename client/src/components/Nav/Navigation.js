import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBook, faUser } from "@fortawesome/free-solid-svg-icons";
import "./navigation.css";

const tabs = [
  {
    route: "/explore",
    icon: faSearch,
    label: "Explore",
  },
  /* {
    route: "/saved",
    icon: faHeart,
    label: "Saved",
  }, */
  {
    route: "/bookings",
    icon: faBook,
    label: "Bookings",
  },
  {
    route: "/account",
    icon: faUser,
    label: "Account",
  },
];

const Navigation = (props) => {
  return (
    <nav className="bottom-tab-nav navbar  navbar-light" role="navigation">
      <Nav className="w-100">
        <div className=" d-flex flex-row justify-content-around w-100">
          {tabs.map((tab, index) => (
            <NavItem key={`tab-${index}`}>
              <NavLink
                to={tab.route}
                className="bottom-nav-link"
                activeClassName="active"
              >
                <div className="row d-flex flex-column justify-content-center align-items-center">
                  <FontAwesomeIcon size="lg" icon={tab.icon} />
                  <div>{tab.label}</div>
                </div>
              </NavLink>
            </NavItem>
          ))}
        </div>
      </Nav>
    </nav>
  );
};

export default Navigation;
