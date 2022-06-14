import React from "react";
import { Container } from "react-bootstrap";
import FolioItem from "./FolioItem";
import DataPlusa from "../Data/DataPlusa";
import DataPlusx from "../Data/DataPlusx";
import DataStraw from "../Data/DataStraw";
import DataPointbank from "../Data/DataPointbank";

const ExperienceList = () => {
    return (
        <>
            <div className="folioList">
                <Container>
                    <h3 className="txt-title">플러스에이(주) | 2020.05.01 ~ 2022.04.30 | WS | 책임 개발자 | 퍼블리싱</h3>
                    <div className="mui items">
                        <FolioItem folioList={DataPlusa} />
                    </div>
                </Container>
                <Container>
                    <h3 className="txt-title">플러스엑스(주) | 2014.04.24 ~ 2020.04.30 | UI | 책임 개발자 | 퍼블리싱</h3>
                    <div className="mui items">
                        <FolioItem folioList={DataPlusx} />
                    </div>
                </Container>
                <Container>
                    <h3 className="txt-title">(주)스트로우 | 2013.02.18 ~ 2014.02.28 | UID | 선임 연구원 | 퍼블리싱</h3>
                    <div className="mui items">
                        <FolioItem folioList={DataStraw} />
                    </div>
                </Container>
                <Container>
                    <h3 className="txt-title">(주)포인트뱅크 | 2009.12.28 ~ 2012.12.31 | 개발팀 | 사원 | 디자인/퍼블리싱</h3>
                    <div className="mui items">
                        <FolioItem folioList={DataPointbank} />
                    </div>
                </Container>
            </div>
        </>
    );
};

export default ExperienceList;
