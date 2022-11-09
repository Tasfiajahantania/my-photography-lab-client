import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const SocialLogin = () => {
  const { googleSinIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSinIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="mx-auto">
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-primary w-full text-white"
      >
        <FaGoogle />
      </button>
    </div>
  );
};

export default SocialLogin;
