import React from "react";
import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Review from "./Review/Review";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./main.css";

class Main extends Component {
  render() {
    return (
      <div
        id="wrap"
        className="text-slate-500 dark:text-slate-400 bg-bg-slate-900 dark:bg-slate-900"
      >
        <Header />
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="review" element={<Review />} />
            <Route path="contact" element={<Contact />} />
            <Route path="experience" element={<Experience />} />
          </Route>
        </Routes>
        <Outlet />
        <Footer />
      </div>
    );
  }
}
export default Main;
