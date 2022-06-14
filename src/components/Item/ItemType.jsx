import React from "react";

const ItemHeader = ({ folioList }) => {
    return (
        <>
            {folioList.map((it) => (
                <div className="type">담당 업무 : {it.type}</div>
            ))}
        </>
    );
};

export default ItemHeader;
