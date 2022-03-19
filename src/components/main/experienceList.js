import React from "react";
import { Item } from "semantic-ui-react";

import DataPlusa from "../data/dataPlusa";
import DataPlusx from "../data/dataPlusx";
import DataStraw from "../data/dataStraw";
import DataPontbank from "../data/dataPointbank";

const ExperienceList = () => {
  return (
    <div class="experience-cont">
      <div className="lst-experience">
        <h3 class="text-slate-500 dark:text-slate-50">
          플러스에이(주)(2020.05.01 - 현재)
        </h3>
        {/* <Item.Group items={DataPlusa} className="leading-5" /> */}
        {/* <Item.Group items={DataPlusa} className="leading-5" /> */}
        <Item.Group
          items={DataPlusa}
          className="text-slate-500 dark:text-slate-400"
        />
      </div>
      <div className="lst-experience">
        <h3 class="text-slate-500 dark:text-slate-50">
          플러스엑스(주)(2014.04.24 - 2020.04.30)
        </h3>
        <Item.Group
          items={DataPlusx}
          className="text-slate-500 dark:text-slate-400"
        />
      </div>
      <div className="lst-experience">
        <h3 class="text-slate-500 dark:text-slate-50">
          (주)스트로우(2013.02.18 - 2014.02.28)
        </h3>
        <Item.Group
          items={DataStraw}
          className="text-slate-500 dark:text-slate-400"
        />
      </div>
      <div className="lst-experience">
        <h3 class="text-slate-500 dark:text-slate-50">
          (주)포인트뱅크(2009.12.26 - 2012.12.31)
        </h3>
        <Item.Group
          items={DataPontbank}
          className="text-slate-500 dark:text-slate-400"
        />
      </div>
    </div>
  );
};
export default ExperienceList;

// const PlusaList = () => {
//   return (
//     <div className="lst-experience">
//       <p>플러스에이(주)(2020.05.01 - 현재) : 8건</p>
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
