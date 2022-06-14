import React from "react";

const FolioItem = ({ folioList }) => {
    return (
        <>
            <div className="folio-item">
                {/* <h4>{folioList.length}개의 포트폴리오가 있습니다.</h4> */}
                <div className="mui items">
                    {folioList.map((it) => (
                        <div className="item" ket={it.id}>
                            <div className="image">
                                <img src={it.image} alt="" />
                            </div>
                            <div className="content">
                                <div className="header">
                                    <a href={it.header.href} target={it.header.target} className={it.header.className}>
                                        {it.header.content}
                                    </a>
                                </div>
                                <div className="type">담당 업무 : {it.type}</div>
                                <div className="role">수행 업무 : {it.role}</div>
                                <div className="date">구축/운영 기간 : {it.date}</div>
                                <div className="contribution">기여도 : {it.contribution}</div>
                                <div className="skills">사용기술 : {it.skills}</div>
                                <div className="links">
                                    <a href={it.links.href} target={it.links.target} className={it.links.className}>
                                        {it.links.content}
                                    </a>
                                </div>
                                <div className="links2">
                                    Behance :&nbsp;
                                    <a href={it.links2.href} target={it.links2.target} className={it.links2.className}>
                                        {it.links2.content}
                                    </a>
                                </div>
                                <div className="awards"> Award : {it.awards}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default FolioItem;
