import React from "react";
import ArtistProfile from "../components/ArtistProfile/ArtistProfile";
import HostProfile from "../components/HostProfile/HostProfile";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";

const Account = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div className="">
      <ArtistProfile />
      <HostProfile />

      <nav className="text-center">
        {Auth.loggedIn() ? (
          <>
            <Link to="/account">Me</Link>
            <a href="/" onClick={logout}>
              Logout
            </a>
          </>
        ) : (
          <>
            <Link to="/">Login</Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Account;
