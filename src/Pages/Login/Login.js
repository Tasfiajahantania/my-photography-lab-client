import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { login } = useContext(AuthContext);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        event.target.reset();
      })
      .then((error) => console.log(error));
  };
  return (
    <div className="card flex-shrink-0 w-full mb-10 max-w-sm shadow-2xl bg-base-100 py-20 mx-auto">
      <h1 className="text-5xl text-center font-bold">Login</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input className="btn btn-primary" type="submit" value="Login" />
        </div>

        <SocialLogin></SocialLogin>
      </form>
      <p className="text-center">
        Create a new account
        <Link className="text-blue-600 font-bold" to="/signup">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
