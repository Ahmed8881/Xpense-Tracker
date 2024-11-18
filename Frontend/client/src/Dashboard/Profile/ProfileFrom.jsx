import React, { useState } from "react";
import { useGlobalContext } from "../GlobalData/globalContext";

export default function ProfileFrom() {
  const { user, updateUser } = useGlobalContext();
  const [input, setInput] = useState({
    id: user.id,
    name: user.name,
    email: user.email,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(input); // Pass updated input values
  };

  const handleChange = (name) => (e) => {
    setInput({ ...input, [name]: e.target.value, id: user.id });
  };

  return (
    <form
      action=""
      className="flex flex-col items-center w-full rounded-md shadow-2xl p-12"
      onSubmit={handleSubmit}
    >
      <fieldset>
        <legend className="font-bold text-lg">Personal details</legend>
        <div className="flex flex-col justify-start space-y-2">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            placeholder="Name"
            value={input.name} // Use input.name instead of user.name
            onChange={handleChange("name")}
            className="w-56 p-2 rounded-md border-2 border-gray-200"
          />
        </div>
        <div className="flex flex-col justify-start space-y-2">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            placeholder="Email"
            value={input.email} // Use input.email instead of user.email
            onChange={handleChange("email")}
            className="w-56 p-2 rounded-md border-2 border-gray-200"
          />
        </div>
      </fieldset>
      <div className="button my-4 flex justify-center items-center w-full">
        <button className="text-sm p-2 bg-[green] rounded-md text-white w-full">
          Update
        </button>
      </div>
    </form>
  );
}
