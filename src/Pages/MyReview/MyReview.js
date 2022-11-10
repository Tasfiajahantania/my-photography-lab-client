import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import ReviewRow from "./ReviewRow";

const MyReview = () => {
  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(
      `https://assignment-11-server-neon.vercel.app/my-review/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => setReviews(data));
  });

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Review</th>
            <th>Service</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <ReviewRow key={review._id} reviewData={review}></ReviewRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReview;
