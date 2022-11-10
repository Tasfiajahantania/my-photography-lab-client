import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/banner/img-5.png";

const ExtraServices = () => {
  return (
    <div className="hero bg-pink-200 mb-10 shadow-lg">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2">
          <img src={img} alt="/" className=" rounded-lg" />
        </div>
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">About me</h1>
          <h1 className="text-3xl font-semibold">I'm Pricila </h1>
          <p className="py-6 text-xl">
            I am a professional photographer, I have been involved in this work
            for the last 10 years, I work as a photographer in various events,
            my main objective is to satisfy the client.
          </p>
          <Link to="/">
            <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExtraServices;
