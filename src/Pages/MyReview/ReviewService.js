import React, { useEffect, useState } from "react";

const ReviewService = (props) => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch(`https://assignment-11-server-neon.vercel.app/service/${props.id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  const { img, title } = service;
  return (
    <td>
      <div className="flex items-center space-x-3">
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={img} alt={title} />
          </div>
        </div>
        <div>
          <div className="font-bold">{title}</div>
        </div>
      </div>
    </td>
  );
};

export default ReviewService;
