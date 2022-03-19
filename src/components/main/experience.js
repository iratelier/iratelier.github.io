import React from "react";
import ExperienceList from "./experienceList";

import "../css/experience.css";

const Experience = () => {
  return (
    <div className="container-wrap experience">
      <h2 className="txt-headline text-slate-900 dark:text-slate-200">
        Experience
      </h2>
      <div className="contents-wrap">
        <ExperienceList />
      </div>
    </div>
  );
};
export default Experience;
