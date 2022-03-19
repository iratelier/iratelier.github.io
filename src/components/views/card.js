import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import DataReviews from "../data/dataReviews";

const ReviewList = () => {
  return (
    <div class="reviews-cont">
      {/* <Card.Group items={DataReviews} /> */}
      <Card.Group items={DataReviews} icon="users" />
    </div>
  );
};
export default ReviewList;
