import React from "react";

const ItemDate = ({ folioList }) => {
    return (
        <>
            {folioList.map((it) => (
                <div className="date">구축/운영 기간 : {it.date}</div>
            ))}
        </>
    );
};

export default ItemDate;
