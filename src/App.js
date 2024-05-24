import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import ServiceDetail from "./components/Services/ServicesDetail";
import BlogDetail1 from "./components/Blog/BlogDetail1";
import BlogDetail2 from "./components/Blog/BlogDetail2";
import BlogDetail3 from "./components/Blog/BlogDetail3";
import BlogDetail4 from "./components/Blog/BlogDetail4";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
        <Navbar />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetail/1" element={<BlogDetail1 />} />
          <Route path="/blogdetail/2" element={<BlogDetail2 />} />
          <Route path="/blogdetail/3" element={<BlogDetail3 />} />
          <Route path="/blogdetail/4" element={<BlogDetail4 />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
