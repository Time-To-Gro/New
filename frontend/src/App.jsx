import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import FestivalsPage from "./components/FestivalsPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";



export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/festivals" element={<FestivalsPage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/contactus" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </Router>
  );
}
