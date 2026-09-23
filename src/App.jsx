import React from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router";
import About from "./pages/About";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import ApartmentList from "./components/ApartmentList";
import DuplexApartment from "./components/DuplexApartment";
import ApartmentSerenity from "./pages/ApartmentSerenity";
import ApartmentOasis from "./pages/ApartmentOasis";
import ApartmentRetreat from "./pages/ApartmentRetreat";
import ApartmentEmerald from "./pages/ApartmentEmerald";

const App = () => {
  return (
    <div>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Homepage />} />
        <Route path="/about" element = {<About />} />
        <Route path="/apartment-serenity" element = {<ApartmentSerenity />} />
        <Route path="/apartment-oasis" element = {<ApartmentOasis />} />
        <Route path="/apartment-retreat" element = {<ApartmentRetreat />} />
        <Route path="/apartment-emerald" element = {<ApartmentEmerald />} />
        <Route path="/apartment-duplex" element = {<DuplexApartment />} />
        <Route path="/apartment-list" element = {<ApartmentList />} />
        <Route path="/contact" element = {<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
