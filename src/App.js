import React from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Contact from "./Components/Contact";








function App() {

  return (
    <>
   
   <Sidebar></Sidebar>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Portfolio" element={<Portfolio/>}></Route>
        <Route path="/Services" element={<Services/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
      </Routes>
    </Router>

    </>
  );
}

export default App;
