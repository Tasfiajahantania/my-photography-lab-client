import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import img1 from "../assets/images/img13.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";
import img12 from "../assets/images/img8.jpg";
import img8 from "../assets/images/img9.jpg";
import img9 from "../assets/images/img10.jpg";
import img10 from "../assets/images/img11.jpg";
import img11 from "../assets/images/img12.jpg";
import img13 from "../assets/images/img14.jpg";

const RecentWork = () => {
  const images = [
    img1,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
  ];
  return (
    <div className="bg-sky-200 py-8">
      <p className="text-center text-black">TAKE A QUICK LOOK AT</p>
      <h3 className="text-5xl text-bold m-0 text-center pb-4 text-black">
        Recent Work
      </h3>

      <div className="sm:mx-1 md:mx-5">
        <PhotoProvider>
          <div className="foo grid sm:grid-cols-1 md:grid-cols-4 sm:gap-4 md:gap-8">
            {images.map((item, index) => (
              <PhotoView key={index} src={item}>
                <img
                  className=""
                  src={item}
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </div>
  );
};

export default RecentWork;
