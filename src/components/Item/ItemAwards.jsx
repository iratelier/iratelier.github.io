import React from "react";

const ItemAwards = ({ folioList }) => {
    return (
        <>
            {folioList.map((it) => (
                <div className="awards"> Award : {it.awards}</div>
            ))}
        </>
    );
};

export default ItemAwards;
