import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "Pages/Home";
import Projects from "Pages/Projects";
import About from "Pages/About";
import Contact from "Pages/Contact";
export const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};
