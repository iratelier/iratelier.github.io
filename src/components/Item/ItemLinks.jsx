import React from "react";

const ItemLinks = ({ folioList }) => {
    return (
        <>
            {folioList.map((it) => (
                <div className="links">
                    URL :
                    <a href={it.links} target="_blank">
                        {it.links}
                    </a>
                </div>
            ))}
        </>
    );
};

export default ItemLinks;
