import React from "react";

const ItemSkills = ({ folioList }) => {
    return (
        <>
            {folioList.map((it) => (
                <div className="skills">사용기술 : {it.skills}</div>
            ))}
        </>
    );
};

export default ItemSkills;
