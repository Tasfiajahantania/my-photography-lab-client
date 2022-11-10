import React, { useEffect, useState } from "react";

import ReviewRow from "./ReviewRow";

const Reviews = (props) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(
      `https://assignment-11-server-neon.vercel.app/review/${props.serviceId}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  });

  return (
    <div className="overflow-x-auto w-full">
      <h2 className="">{reviews.length} Review</h2>
      <table className="table w-full">
        <tbody>
          {reviews.map((review) => (
            <ReviewRow key={review._id} reviewData={review}></ReviewRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reviews;
