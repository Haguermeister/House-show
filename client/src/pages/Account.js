import React from "react";
import ArtistProfile from "../components/ArtistProfile/ArtistProfile";
import HostProfile from "../components/HostProfile/HostProfile";
import "../components/Modal/profileModal.css";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import auth from "../utils/auth";
const Account = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  const [userType] = auth.loggedIn();
  return (
    <div className="">
      {userType === "artist" ? <ArtistProfile /> : ""}
      {userType === "host" ? <HostProfile /> : ""}
      <nav className="text-center">
        {Auth.loggedIn() ? (
          <>
            <Link to="/account"></Link>
            <a className="accLogout" href="/" onClick={logout}>
              Logout
            </a>
          </>
        ) : (
          <>
            <Link to="/">Login or Signup</Link>
          </>
        )}
      </nav>
    </div>
  );
};
export default Account;
