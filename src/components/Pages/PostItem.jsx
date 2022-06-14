import React from "react";

const PostItem = (props) => {
    return (
        <>
            <div className="item">
                <div className="image">
                    <img src={require("../../resources/images/experience/thumbs/horizontal/img_thumb_default.jpg")} />
                </div>
                <div className="content">
                    <a href="https://www.behance.net/gallery/88492253/Krafton-game-union-Brand-eXperience-Design-renewal?tracking_source=search_projects%7Cplusx" target="_blank" className="header">
                        [크래프톤] 웹 사이트 리뉴얼
                    </a>
                    <div className="type">웹 사이트 구축</div>
                    <div className="role">UI 구조 설계 및 퍼블리싱, 인터렉션 설계 및 구현</div>
                    <div className="date">리뉴얼 : 2019.01 ~ 2019.05</div>
                    <div className="contribution">기여도 : 퍼블리싱 90%</div>
                    <div className="skills">사용기술 : HTML5, Javascript</div>
                    <div className="links">
                        <a href="#">URL : https://krafton.com/</a>
                    </div>
                    <div className="behance">
                        <a href="#">Behance : https://www.behance.net/gallery/88492253/Krafton-game-union-Brand-eXperience-Design-renewal?tracking_source=search_projects%7Cplusx</a>
                    </div>
                    <div className="awards">Award : 2019 &amp;어워드 Winner</div>
                </div>
            </div>
        </>
    );
};
export default PostItem;
