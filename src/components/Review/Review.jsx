import React from "react";
import ReviewCard from "./ReviewCard";

const Review = () => {
  return (
    <div className="container-wrap review">
      <h2 className="txt-headline text-slate-900 dark:text-slate-200">
        Review
      </h2>
      <div className="contents-wrap">
        <ReviewCard />
      </div>
    </div>
  );
};
export default Review;
