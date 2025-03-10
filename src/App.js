import React from "react";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Sidebar from "./Components/SideBar/Sidebar";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import WorkingOnIt from "./Components/WorkingOnIt/WorkingOnIt";
import NotFound from "./Components/NotFound/NotFound";
import Skill from "./Components/About/Skill/Skill";
import PageLoad from "./Components/Loader/PageLoad";
import Practice from "./Components/Practice";









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
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/pageload" element={<PageLoad />}></Route>
        <Route path="/practice" element={<Practice />}></Route>
      </Routes>
    </Router>

    </>
  );
}

export default App;
