import React from "react";

const ItemImage = ({ folioList }) => {
    return (
        <>
            {folioList.map((it) => (
                <div className="image">
                    <a href={it.image}>
                        <imv src={it.image} alt="" />
                    </a>
                </div>
            ))}
        </>
    );
};

export default ItemImage;
