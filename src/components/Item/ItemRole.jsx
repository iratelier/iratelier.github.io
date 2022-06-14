import React from "react";

const ItemRole = ({ folioList }) => {
    return (
        <>
            {folioList.map((it) => (
                <div className="role">수행 업무 : {it.role}</div>
            ))}
        </>
    );
};

export default ItemRole;
