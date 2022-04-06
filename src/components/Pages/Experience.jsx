import React from "react";
import { Container } from "react-bootstrap";
import ExperienceList from "./ExperienceList";

import "./experience.css";

const Experience = () => {
    return (
        <>
            <Container id="container" className="experience">
                <div className="container-wrap">
                    <h2 className="txt-headline">Experience</h2>
                    <div className="contents-wrap">
                        <ExperienceList />
                    </div>
                </div>
            </Container>
        </>
    );
};
export default Experience;
