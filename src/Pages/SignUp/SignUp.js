import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
  };
  return (
    <div className="card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100 py-20">
      <h1 className="text-5xl text-center font-bold">Sign Up</h1>
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Sign Up" />
        </div>
      </form>
      <p className="text-center">
        Already have an account?{" "}
        <Link className="text-blue-600 font-bold" to="/login">
          Login
        </Link>{" "}
      </p>
    </div>
  );
};

export default SignUp;
