import React from "react"
import { Component } from "react"
import { Routes, Route, Link } from "react-router-dom"
import { Outlet } from "react-router-dom"
// import Home from "./Home/Home";
// import About from "./About/About";
// import Blog from "./Blog/Blog";
// import Review from "./Review/Review";
// import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience"
import Header from "./Header/Header"
import Footer from "./Footer/Footer"
import Background from "./Background/Background"
import "./main.css"

class Main extends Component {
    render() {
        return (
            <div id="wrap">
                <Background />
                <Header />
                <Experience />
                <Footer />
            </div>
        )
    }
}
export default Main
