import React, { useState } from "react";
import { useGlobalContext } from "../../utils/globalContext";

export default function AddCategory() {
  const { addCategory } = useGlobalContext();
  const [input, setInput] = useState({
    type: "",
    name: "",
  });
  const { type, name } = input;
  const handleChange = (name) => (e) => {
    setInput({ ...input, [name]: e.target.value});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const CategoryData = {
      ...input,
    };
    addCategory(CategoryData);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-black  border border-slate-200 flex flex-col rounded-xl px-10 py-4 text-sm"
    >
      <h1 className="text-center text-green-400 text-xl font-bold col-span-6">
        Add Category
      </h1>
      <div className="flex flex-col space-y-2">
        <label htmlFor="">Name</label>
        <input
          type="text"
          className="rounded-md"
          value={name}
          name="name"
          onChange={handleChange("name")}
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="">Type</label>
        <select
          required
          className="rounded-md"
          value={type}
          name="type"
          onChange={handleChange("type")}
        >
          <option value="" disabled>
            Select Option
          </option>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
          <option value="Goal">Goal</option>
        </select>
      </div>
      <div
        className="
      flex justify-center items-center mt-7 "
      >
        <button className="btn px-10">Add</button>
      </div>
    </form>
  );
}
