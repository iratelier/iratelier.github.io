import React from "react";
import ItemHeader from "../Data/ItemHeader";
import ItemType from "../Data/ItemType";
import ItemRole from "../Data/ItemRole";
import ItemDate from "../Data/ItemDate";
import ItemContribution from "../Data/ItemContribution";
import ItemSkills from "../Data/ItemSkills";
import ItemLinks from "../Data/ItemLinks";
import ItemBehance from "../Data/ItemBehance";
import ItemAwards from "../Data/ItemAwards";

const FolioList = ({ folioList }) => {
    return (
        <>
            {folioList.map((it) => (
                <div className="content">
                    <ItemHeader />
                    <ItemType />
                    <ItemRole />
                    <ItemDate />
                    <ItemContribution />
                    <ItemLinks />
                    <ItemSkills />
                    <ItemBehance />
                    <ItemAwards />
                </div>
            ))}
        </>
    );
};

export default FolioList;
