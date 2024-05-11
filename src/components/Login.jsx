import React, { useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm((prevState) => !prevState);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="" />
      </div>
      <form className="absolute w-3/12 bg-black bg-opacity-80 p-12 my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full bg-gray-700"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-700"
        />

        <button className="p-2 m-2 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a member? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;