import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import ServiceCard from "../Services/ServiceCard";

const Home = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <Banner></Banner>
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
    </div>
  );
};

export default Home;
