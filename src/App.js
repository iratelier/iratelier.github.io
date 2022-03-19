import React from "react";
import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Layout from "./components/main/layout";
import Home from "./components/main/home";
import About from "./components/main/about";
import Blog from "./components/main/blog";
import Review from "./components/main/review";
import Contact from "./components/main/contact";
import Experience from "./components/main/experience";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="review" element={<Review />} />
          <Route path="contact" element={<Contact />} />
          <Route path="experience" element={<Experience />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    );
  }
}

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="experience" element={<Experience />} />
//         <Route path="*" element={<NoMatch />} />
//       </Route>
//     </Routes>
//   );
// }
export default App;

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="experience" element={<Experience />} />
//         <Route path="*" element={<NoMatch />} />
//       </Route>
//     </Routes>
//   );
// }

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
