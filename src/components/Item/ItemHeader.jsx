import React from "react";

const ItemHeader = ({ folioList }) => {
    return (
        <>
            {folioList.map((it) => (
                <div className="header">
                    <a href={it.behance} target="_blank">
                        {it.header}
                    </a>
                </div>
            ))}
        </>
    );
};

export default ItemHeader;
