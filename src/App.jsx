import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Background from "./components/Layout/Background";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Experience from "./components/Pages/Experience";
import Contact from "./components/Pages/Contact";

import "./components/css/layout.css";

function App() {
    return (
        <>
            <Router>
                <Header />
                <Background />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Experience" component={Experience} />
                    <Route path="/Contact" component={Contact} />
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
