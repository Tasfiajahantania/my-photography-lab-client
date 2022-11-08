import React from "react";

const ServiceCard = ({ service }) => {
  const { _id, img, price, title, description } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8">
      <figure>
        <img src={img} alt="Img" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price: ${price}</p>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
