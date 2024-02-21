import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div>
      <img alt="logo" className="logo" src={logo} />
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Products</Link>
          </li>
          <li>
            <Link to="/update">Update Products</Link>
          </li>

          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/signup" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
