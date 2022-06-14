import React from "react";
import { Item } from "semantic-ui-react";

import DataPlusa from "../Data/bak/DataPlusa";
import DataPlusx from "../Data/bak/DataPlusx";
import DataStraw from "../Data/bak/DataStraw";
import DataPointbank from "../Data/bak/DataPointbank";

const ExperienceList = () => {
    return (
        <>
            <div className="experience-cont">
                <div className="lst-experience">
                    <h3 className="txt-title">플러스에이(주) | 2020.05.01 ~ 현재 | WS | 책임 개발자 | 퍼블리싱</h3>
                    <Item.Group items={DataPlusa} />
                </div>
                <div className="lst-experience">
                    <h3 className="txt-title">플러스엑스(주) | 2014.04.24 ~ 2020.04.30 | UI | 책임 개발자 | 퍼블리싱</h3>
                    <Item.Group items={DataPlusx} />
                </div>
                <div className="lst-experience">
                    <h3 className="txt-title">(주)스트로우 | 2013.02.18 ~ 2014.02.28 | UID | 선임 연구원 | 퍼블리싱</h3>
                    <Item.Group items={DataStraw} />
                </div>
                <div className="lst-experience">
                    <h3 className="txt-title">(주)포인트뱅크 | 2009.12.28 ~ 2012.12.31 | 개발팀 | 사원 | 디자인/퍼블리싱</h3>
                    <Item.Group items={DataPointbank} />
                </div>
            </div>
        </>
    );
};
export default ExperienceList;

// const PlusaList = () => {
//   return (
//     <div className="lst-experience">
//       <p>플러스에이(주)(2020.05.01 - 현재)</p>
//       <Item.Group items={DataPlusa} />
//     </div>
//   );
// };
// export default PlusaList;

// const ExperienceList = () => {
//   return (
//     <div class="experience-cont">
//       <PlusaList />
//       <PlusxList />
//       <StrawList />
//       <PointbankList />
//     </div>
//   );
// };
// export default ExperienceList;
