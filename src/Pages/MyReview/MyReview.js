import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const MyReview = () => {
  const { user } = useContext(AuthContext);

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/my-review/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews());
  });

  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default MyReview;
