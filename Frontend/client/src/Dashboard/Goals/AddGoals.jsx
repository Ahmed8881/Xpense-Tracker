import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../GlobalData/globalContext";
export default function GoalsForm() {
  // craete annobject to store the input values

  const { addGoal, user, categories, sendNotification, getCategories } =
    useGlobalContext();
  // get categories in use effect
  useEffect(() => {
    getCategories();
  }, []);
  const [input, setInput] = useState({
    user_id: "",
    title: "",
    amount: "",
    category_id: "",
    description: "",
  });
  const { title, amount, category_id, description } = input;
  const handleChange = (name) => (e) => {
    setInput({ ...input, [name]: e.target.value, user_id: user.id });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const goalsData = {
      ...input,
      amount: Number(input.amount),
    };
    const success = await addGoal(goalsData);
    if (success) {
      creatNotification(`${title} as Goals was added`);
    }
    setInput({
      title: "",
      amount: "",
      category_id: "",
      description: "",
    });
  };
  const creatNotification = (message) => {
    const notification = {
      user_id: user.id,
      message: message,
    };
    sendNotification(notification);
  };

  return (
    <section className=" flex-col  p-10 text-black ">
      <div className="header flex justify-center items-center my-2">
        <h1 className="font-protest-riot underline text-lg">
          Add <span className="text-[#03d47c] ">Goals</span>
        </h1>
      </div>
      <form
        action=""
        onSubmit={handleSubmit}
        className="md:p-4 md:space-y-4 space-y-2"
      >
        <div className="md:space-x-2">
          <label htmlFor="title">Title*</label>
          <input
            value={title}
            onChange={handleChange("title")}
            type="text"
            placeholder="Add Title"
            className="border border-[#03d47c] rounded-md p-1 "
          />
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-x-4">
          <div>
            <label htmlFor="amount">Total*</label>
            <input
              value={amount}
              onChange={handleChange("amount")}
              type="number"
              placeholder="Add Amount"
              className="border border-[#03d47c]  rounded-md p-1"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Description*</label>
          <textarea
            value={description}
            onChange={handleChange("description")}
            name=""
            id=""
            cols="5"
            rows="2"
            className="border border-[#03d47c] rounded-md p-1"
          ></textarea>
        </div>

        <div className="selects input-control md:space-x-4">
          <select
            required
            value={category_id}
            name="category_id"
            id="category_id"
            onChange={handleChange("category_id")}
          >
            <option value="" disabled>
              Select Option
            </option>
            {categories
              .filter((category) => category.type === "Goal")
              .map((category) => {
                return (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                );
              })}
          </select>
        </div>

        <div className="text-sm flex justify-end items-end">
          <button className="bg-[#03d47c] py-2 px-4 rounded-md text-white font-medium">
            Save
          </button>
        </div>
      </form>
    </section>
  );
}
