import React from "react";

const ItemBehance = ({ folioList }) => {
    return (
        <>
            {folioList.map((it) => (
                <div className="behance">
                    Behance URL :
                    <a href={it.behance} target="_blank">
                        {it.behance}
                    </a>
                </div>
            ))}
        </>
    );
};

export default ItemBehance;
