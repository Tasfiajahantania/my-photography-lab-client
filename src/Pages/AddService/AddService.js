import React from "react";
import { toast } from "react-toastify";

const AddService = () => {
  const errorAlert = (title) => {
    return toast.error(title, 500);
  };
  const addServiceFormHalder = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    const img = form.img.value;
    const description = form.description.value;

    if (!title) {
      errorAlert("Title is required");
    } else if (!price) {
      errorAlert("Price is required");
    } else if (!img) {
      errorAlert("Thumbnail url is required");
    } else if (!description) {
      errorAlert("Description is required");
    } else {
      const serviceData = {
        title: title,
        price: price,
        img: img,
        description: description,
      };
      fetch(`https://assignment-11-server-neon.vercel.app/add-service`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(serviceData),
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
    }
  };

  return (
    <div className="card w-90 bg-base-100 shadow-xl mb-10">
      <form onSubmit={addServiceFormHalder} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Title here"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="0.00"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              Thumbnail url{" "}
              <small className="text-red-600">(direct link)</small>
            </span>
          </label>
          <input
            type="url"
            name="img"
            placeholder="0.00"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            className="textarea input-bordered"
            name="description"
            placeholder="Description here..."
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Add" />
        </div>
      </form>
    </div>
  );
};

export default AddService;
