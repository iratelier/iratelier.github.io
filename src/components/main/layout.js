import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

import "../css/layout.css";

const Layout = () => {
  return (
    <div
      id="wrap"
      className="text-slate-500 dark:text-slate-400 bg-bg-slate-900 dark:bg-slate-900"
    >
      <Header />
      <section id="container">
        {/* {props.children} */}
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};
export default Layout;
