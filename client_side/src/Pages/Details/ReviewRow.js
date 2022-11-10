import React from "react";
import user from "../../assets/images/user.png";
const ReviewRow = ({ reviewData }) => {
  const { name, email, review } = reviewData;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={user} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>{review}</td>
    </tr>
  );
};

export default ReviewRow;
