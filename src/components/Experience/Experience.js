import React from "react";
import ExperienceList from "./ExperienceList";

import "./experience.css";

const Experience = () => {
  return (
    <section id="container" className="experience">
      <div className="container-wrap">
        <h2 className="txt-headline text-slate-900 dark:text-slate-200">
          Experience
        </h2>
        <div className="contents-wrap">
          <ExperienceList />
        </div>
      </div>
    </section>
  );
};
export default Experience;
