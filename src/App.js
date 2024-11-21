import React from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import WorkingOnIt from "./Components/WorkingOnIt";
import NotFound from "./Components/NotFound";








function App() {


  return (
    <>
   
      <Router>
      

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/workingonit" element={<WorkingOnIt />}></Route>
        <Route path="" element={<Sidebar />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Router>

    </>
  );
}

export default App;
