import React from "react";
import { useLoaderData } from "react-router-dom";
import AddReviews from "./AddReviews";
import Reviews from "./Reviews";

const Details = () => {
  const { _id, img, price, title, description } = useLoaderData();

  return (
    <div>
      <div
        className="hero min-h-screen mb-10"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{description}</p>
            <button className="btn btn-primary">Price: ${price}</button>
          </div>
        </div>
      </div>
      <Reviews></Reviews>
      <AddReviews id={_id}></AddReviews>
    </div>
  );
};

export default Details;
