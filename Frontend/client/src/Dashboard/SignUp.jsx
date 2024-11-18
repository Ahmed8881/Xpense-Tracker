import React, { useState } from "react";
import { useGlobalContext } from "./GlobalData/globalContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

export default function SignUp() {
  const navigate = useNavigate();
  const { signUp } = useGlobalContext();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = input;
  const handleChange = (name) => (e) => {
    setInput({ ...input, [name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    const success = await signUp(input);
    if (success) {
      navigate("/login"); // redirect to home page
    }
    setInput({
      name: "",
      email: "",
      password: "",
    });
  };
  return (
    <section class="flex flex-col-reverse md:flex-row max-h-screen">
      <div class="bg-gray-200  w-[50%] flex items-center justify-center">
        <div class="w-[50%] pt-12">
          <Logo />
          <h1 class="text-3xl md:text-4xl font-bold text-An-600 text-center">
            Welcome To Xpense
          </h1>
          <h2 class="text-xl md:text-2xl font-semibold leading-tight mt-6 text-gray-800 text-center">
            Create your account
          </h2>
          <div class="mt-8 border border-gray-300 rounded-lg px-10 py-6">
            <form action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <label class="block text-gray-700">Name</label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  class="w-full px-6 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-green-500 focus:bg-white focus:outline-none input-focus"
                  autofocus
                  autocomplete
                  required
                  value={name}
                  onChange={handleChange("name")}
                />
              </div>
              <div class="mt-4">
                <label class="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  class="w-full px-6 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-green-500 focus:bg-white focus:outline-none input-focus"
                  required
                  value={email}
                  onChange={handleChange("email")}
                />
              </div>
              <div class="mt-4">
                <label class="block text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  minlength="6"
                  class="w-full px-6 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-green-500 focus:bg-white focus:outline-none input-focus"
                  required
                  value={password}
                  onChange={handleChange("password")}
                />
              </div>
              <button
                type="submit"
                class="w-full block bg-green-500 hover:bg-green-400 focus:bg-green-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 btn-hover btn-focus"
              >
                Sign Up
              </button>
            </form>
          </div>
          <p class="mt-8 text-gray-700 text-center">
            Already have an account?{" "}
            <Link
              to={"/login"}
              class="text-green-500 hover:text-green-700 font-semibold"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
      <div class="hidden md:block bg-gray-200 w-1/2 rounded-3xl overflow-hidden">
        <img
          src="https://cdn-icons-gif.flaticon.com/14642/14642713.gif"
          alt="Login Illustration"
          class="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
