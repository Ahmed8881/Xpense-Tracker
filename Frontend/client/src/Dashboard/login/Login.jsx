import React, { useState } from "react";
import { useGlobalContext } from "../GlobalData/globalContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../components/Logo";

export default function Login() {
  const navigate = useNavigate();
  const { signIn } = useGlobalContext();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const { email, password } = input;
  const handleChange = (name) => (e) => {
    setInput({ ...input, [name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    const success = await signIn(input);
    if (success) {
      navigate("/dashboard"); // redirect to home page
    }
    setInput({
      email: "",
      password: "",
    });
  };
  return (
    <section class="flex flex-col-reverse md:flex-row max-h-screen">
      <div class="bg-gray-200  w-[50%] flex items-center justify-center">
        <div class="w-[44%] pt-12">
          <Logo />
          <h1 class="text-3xl md:text-4xl font-bold  text-center">
            Welcome To Xpense
          </h1>
          <h2 class="text-xl md:text-2xl font-semibold leading-tight mt-6 text-gray-800 text-center">
            Log in to your account
          </h2>
          <div class="mt-8 border border-gray-300 rounded-lg px-10 py-6">
            <form action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <label class="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  class="w-full px-6 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-green-500 focus:bg-white focus:outline-none input-focus"
                  autofocus
                  autocomplete
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
              <div class="text-right mt-2">
                <a
                  href="#"
                  class="text-sm font-semibold text-gray-700 hover:text-green-700 focus:text-green-700"
                >
                  Forgot Password?
                </a>
              </div>
              <button   
                type="submit"
                class="w-full block bg-green-500 hover:bg-green-400 focus:bg-green-400 text-white font-semibold rounded-lg px-4 py-3 mt-6 btn-hover btn-focus"
              >
                Log In
              </button>
            </form>
          </div>
          <p class="mt-8 text-gray-700 text-center">
            Don't Have An Account?{" "}
            <Link
              to={"/signup"}
              class="text-green-500 hover:text-green-700 font-semibold"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <div class="hidden md:block bg-gray-200 w-1/2 rounded-3xl  overflow-hidden">
        <img
          src="https://cdn-icons-gif.flaticon.com/14642/14642713.gif"
          alt="Login Illustration"
          class="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
