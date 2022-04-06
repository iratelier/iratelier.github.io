import React from "react";
import "../css/layer-iframe.css";

const LayerIframe = () => {
    return (
        <div className="layer-iframe">
            <h2 className="txt-headline">Experience</h2>
            <div className="contents-wrap">
                <ExperienceList />
            </div>
        </div>
    );
};
export default LayerIframe;
