import React from "react";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, price, title, description } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mb-8">
      <PhotoProvider>
        <figure>
          <PhotoView key={_id} src={img}>
            <img src={img} alt="" />
          </PhotoView>
        </figure>
      </PhotoProvider>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-orange-500 text-lg font-semibold">Price: ${price}</p>
        <p>{description.slice(0, 100)}...</p>
        <div className="card-actions justify-end">
          <Link to={`/service/${_id}`} className="btn btn-primary">
            Vew Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
