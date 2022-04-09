import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Background from "./Background";
import Home from "../Page/Home";
import About from "../Page/About";
import Experience from "../Page/Experience";
import Contact from "../Page/Contact";
import Error from "../Page/NotFound";
// import NotFound from "../Page/NotFound";
import "../css/layout.css";

const Layout = ({ children }) => {
    return (
        <>
            <Router>
                <Header />
                <Background />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/:About" component={About} />
                    <Route exact path="/:Experience" component={Experience} />
                    <Route exact path="/:Contact" component={Contact} />
                    {/* <Route exact path="/*" component={NotFound} /> */}
                    <Route exact path="/bad-request" render={() => <Error text={"500. Bad Request"} />} />}
                    <Route exact path="*" render={() => <Error text={"sorry. we can not find the page"} />} />}
                </Switch>
                <Footer />
            </Router>
            {/* <BrowserRouter>
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
            </BrowserRouter> */}
        </>
    );
};

export default Layout;
