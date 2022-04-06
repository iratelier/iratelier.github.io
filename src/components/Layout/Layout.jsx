import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Background from "./Background";
import Home from "../Page/Home";
import About from "../Page/About";
import Experience from "../Page/Experience";
import Contact from "../Page/Contact";
import NotFound from "../Page/NotFound";
import "./layout.css";

const Layout = ({ children }) => {
    return (
        <>
            <BrowserRouter>
                <div id="wrap">
                    <Header />
                    <Background />

                    {children}

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/About/*" element={<About />} />
                        <Route path="/Experience/*" element={<Experience />} />
                        <Route path="/Contact/*" element={<Contact />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        </>
    );
};

export default Layout;
