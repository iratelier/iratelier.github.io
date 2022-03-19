import React from "react";
// import { render } from "react-dom";
import Hello from "./hello";
import { ParallaxProvider, Parallax } from 'react-skrollr'
import "../css/home.css";



const data = {
  "data-top-top": "transform: translateX(-100%);",
  "data-center-center": "opacity: 1;transform: translateX(0%);",
  "data-bottom-top": "opacity: 0;"
};

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <ParallaxProvider
          init={{
            smoothScrollingDuration: 1000,
            smoothScrolling: true,
            forceHeight: false
          }}
          getScrollTop={scrollTop => console.log("scrollTop", scrollTop)}
        >
          <div className="title">Welcome MiracleStudio</div>
      
            <Parallax data={data}>
              <span>Start scrolling to see some magic happen {"\u2728"}</span>
            </Parallax>
            <Parallax data={data}>
              <span>Start scrolling to see some magic happen {"\u2728"}</span>
            </Parallax>
            <Parallax data={data}>
              <span>Start scrolling to see some magic happen {"\u2728"}</span>
            </Parallax>
            <Parallax data={data}>
              <span>Start scrolling to see some magic happen {"\u2728"}</span>
            </Parallax>
            <Parallax data={data}>
              <span>Start scrolling to see some magic happen {"\u2728"}</span>
            </Parallax>
            <Parallax data={data}>
              <span>Start scrolling to see some magic happen {"\u2728"}</span>
            </Parallax>
            <Parallax data={data}>
              <span>Start scrolling to see some magic happen {"\u2728"}</span>
            </Parallax>
            <Parallax data={data}>
              <span>Start scrolling to see some magic happen {"\u2728"}</span>
            </Parallax>
            <Parallax data={data}>
              <span>Start scrolling to see some magic happen {"\u2728"}</span>
            </Parallax>
            <Parallax data={data}>
              <span>Start scrolling to see some magic happen {"\u2728"}</span>
            </Parallax>
            <Parallax data={data}>
              <span>Start scrolling to see some magic happen {"\u2728"}</span>
            </Parallax>
            <Parallax data={data}>
              <span>Start scrolling to see some magic happen {"\u2728"}</span>
            </Parallax>
            <Parallax data={data}>
              <span>Start scrolling to see some magic happen {"\u2728"}</span>
            </Parallax>
            <Parallax data={data}>
              <span>Start scrolling to see some magic happen {"\u2728"}</span>
            </Parallax>
            <Parallax data={data}>
              <span>Start scrolling to see some magic happen {"\u2728"}</span>
            </Parallax>
            <Parallax data={data}>
              <span>Start scrolling to see some magic happen {"\u2728"}</span>
            </Parallax>
            <Parallax data={data}>
              <span>Start scrolling to see some magic happen {"\u2728"}</span>
            </Parallax>
            <Parallax data={data}>
              <span>Start scrolling to see some magic happen {"\u2728"}</span>
            </Parallax>
      
            <Parallax data={data}>
              <span>Start scrolling to see some magic happen {"\u2728"}</span>
            </Parallax>
            <Parallax data={data}>
              <span>Start scrolling to see some magic happen {"\u2728"}</span>
            </Parallax>
            <Parallax data={data}>
              <span>Start scrolling to see some magic happen {"\u2728"}</span>
            </Parallax>
      
        </ParallaxProvider>
      </div>
    );
  }
}
export default Home;
// render(<Home />, document.getElementById("root"));
