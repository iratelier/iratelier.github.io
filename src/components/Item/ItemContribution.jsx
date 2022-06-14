import React from "react";

const ItemContribution = ({ folioList }) => {
    return (
        <>
            {folioList.map((it) => (
                <div className="contribution">기여도 : {it.contribution}</div>
            ))}
        </>
    );
};

export default ItemContribution;
