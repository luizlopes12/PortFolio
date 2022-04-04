import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
const RoutesManager = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Home />} />
        <Route path="/contact" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default RoutesManager;
