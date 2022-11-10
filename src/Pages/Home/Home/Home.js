import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RecentWork from "../../RecentWork";
import Banner from "../Banner/Banner";
import ExtraServices from "../ExtraServices";
import ServiceCard from "../Services/ServiceCard";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://assignment-11-server-neon.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);
  return (
    <div>
      <Banner></Banner>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold">Service</h1>
        <h1 className="text-5xl font-bold">My Services Area</h1>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="text-center">
        <Link to="/services">
          <button className="bg-orange-400 py-3 px-8 mb-5">See All</button>
        </Link>
      </div>
      <div className="">
        <ExtraServices></ExtraServices>
      </div>
      <div>
        <RecentWork></RecentWork>
      </div>
    </div>
  );
};

export default Home;
