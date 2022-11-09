import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { toast } from "react-toastify";

const AddReviews = (props) => {
  const { user } = useContext(AuthContext);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const userReview = e.target.review.value;
    const reviewData = {
      service: props.id,
      name: user?.displayName,
      email: user?.email,
      review: userReview,
    };
    fetch(`http://localhost:5000/add-review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Review Submit successful", { autoClose: 500 });
          e.target.reset();
        }
      })
      .catch((er) => console.error(er));
  };

  return (
    <div>
      {user?.email ? (
        <>
          <form
            onSubmit={handleOnSubmit}
            className="flex justify-center align-middle flex-col"
          >
            <textarea
              name="review"
              className="textarea textarea-bordered h-24"
              placeholder="Write your review here..."
            ></textarea>
            <button className="btn btn-warning my-8 w-28 ">Add</button>
          </form>
        </>
      ) : (
        <button className="btn btn-warning my-8">
          <Link to="/login">Login first for review</Link>
        </button>
      )}
    </div>
  );
};

export default AddReviews;
