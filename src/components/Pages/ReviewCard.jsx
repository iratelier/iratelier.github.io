import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import DataReviews from "../Data/DataReviews";

const ReviewCard = () => {
    return (
        <div className="reviews-cont">
            {/* <Card.Group items={DataReviews} /> */}
            <Card.Group items={DataReviews} icon="users" />
        </div>
    );
};
export default ReviewCard;
