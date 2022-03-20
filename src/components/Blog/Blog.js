import React from "react";
import ReactDOM from "react-dom";
import { Item } from "semantic-ui-react";
import "./layerframe.css";

class LayerFrame2 extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup_inner">
          <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>close me</button>
        </div>
      </div>
    );
  }
}

class LayerFrame extends React.Component {
  render() {
    return (
      <div className="por_detail">
        <button onClick={this.props.closePopup}>close me</button>
      </div>
    );
  }
}
class Blog extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   showPopup: false
    // };
    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  // togglePopup() {
  //   this.setState({
  //     showPopup: !this.state.showPopup
  //   });
  // }
  handleClick(event) {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));

    window.location.hash = !this.attr("rel");
    event.preventDefault();
  }

  render() {
    return (
      <section id="container" className="blog">
        <div className="container-wrap">
          <h2 className="txt-headline text-slate-900 dark:text-slate-200">
            Blog
          </h2>
          <div className="contents-wrap">
            <a
              class="porlink"
              href="portfolio/kakaopage2.html"
              rel="#kakaopage2"
              onClick={this.handleClick}
            >
              열기
            </a>
            <Item.Group items={DataPlusx} className="porlink" />

            <div className="aaa">
              <button onClick={this.togglePopup.bind(this)}>show popup</button>
              {this.state.showPopup ? (
                <LayerFrame
                  text="Close Me"
                  closePopup={this.togglePopup.bind(this)}
                />
              ) : null}
            </div>
          </div>
          <div className="por_detail"></div>
        </div>
      </section>
    );
  }
}

export default Blog;

const DataPlusx = [
  {
    childKey: 3029,
    image: "/resources/image/thumbs/horizontal/img_thumb_krafton.jpg",
    header: {
      content: "[크래프톤] 웹 사이트 리뉴얼(PC, 모바일)",
      href: "https://www.behance.net/gallery/88492253/Krafton-game-union-Brand-eXperience-Design-renewal?tracking_source=search_projects%7Cplusx",
      target: "_blank",
    },
    meta: "- 퍼블리싱 90%",
    description: "- UI 구조 설계 및 퍼블리싱\n- 인터렉션 설계 및 구현",
    extra: "2019.01 - 2019.05",
    href: "/src/components/iframe/kakaopage2.html",
    className: "porlink",
    rel: "#kakaopage2",
  },
  {
    childKey: 3026,
    image: "/resources/image/thumbs/horizontal/img_thumb_etiqa.jpg",
    header: {
      content: "[에티카] 웹 사이트 구축(PC, 모바일), 웹 사이트 운영/유지보수",
      href: "https://www.behance.net/gallery/82140583/ETIQA-Brand-eXperience-Design?tracking_source=search_projects%7Cplusx",
      target: "_blank",
    },
    meta: "- 퍼블리싱 100%",
    description:
      "- UI 구조 설계 및 퍼블리싱\n- 인터렉션 설계 및 구현\n- 웹 사이트 운영/유지보수",
    extra: "2018.11 - 2018.12 / 2018.11 - 2019.05",
  },
];
