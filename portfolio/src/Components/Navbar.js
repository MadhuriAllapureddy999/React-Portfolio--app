import React from "react";
import logo from '../logo.png';
// React fontawesome imports
import { FaBars } from "@react-icons/all-files/fa/FaBars";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">
     
     
      <Link className="navbar-brand" to='/' > <img className="logo" src={logo} alt="logo..."/> </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
       <FaBars icon="fa-solid fa-bars" style={{color: "#fff"}} />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link">
              Home 
              <span className="sr-only" to='/welcome'>(current)</span>
            </Link>
          </li>
          <li className="nav-item"> 
            <Link className="nav-link" to='/about'>
              about me
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
