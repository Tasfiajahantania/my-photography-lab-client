import React from "react";
import ReviewService from "./ReviewService";

const ReviewRow = ({ reviewData }) => {
  const { name, email, review, service } = reviewData;
  return (
    <tr>
      <td>{name == null ? "Unknown" : name}</td>
      <td>{email}</td>
      <td>{review}</td>
      <ReviewService id={service}></ReviewService>
    </tr>
  );
};

export default ReviewRow;
