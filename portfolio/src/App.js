import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login";
import WelcomePage from "./pages/WelcomePage";

import React from "react";
import AboutMe from "./pages/AboutMe";
import Contacts from "./Components/Contacts";
import Services from "./Components/Services";
import Home from "./Components/Home";

const App = () => {

  return (
    <>
      <Router>
        
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/welcome" element={<WelcomePage />}></Route>
          <Route path="/about" element={<AboutMe />}></Route>
          <Route path="/contacts" element={<Contacts/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
