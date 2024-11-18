import React, { useState } from "react";
import { useGlobalContext } from "../GlobalData/globalContext";

export default function AddFeedback() {
  const { addFeedback, user } = useGlobalContext();
  const [input, setInput] = useState({
    mood: "",
    rating: "",
    checkbox: "",
    message: "",
  });

  const handleChange = (name) => (e) => {
    setInput({ ...input, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedbackData = {
      ...input,
      user_id: user.id,
    };
    addFeedback(feedbackData);
    setInput({
      mood: "",
      rating: "",
      checkbox: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white px-20 py-10 shadow-2xl rounded-md"
    >
      {/* Mood Selection */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-gray-700">
          How's your mood after using Xpense?
        </label>
        <div className="mt-2 flex items-center space-x-4">
          <input
            type="radio"
            id="happy"
            name="mood"
            value="happy"
            onChange={handleChange("mood")}
          />
          <label htmlFor="happy" className="cursor-pointer text-3xl">
            😊
          </label>

          <input
            type="radio"
            id="neutral"
            name="mood"
            value="neutral"
            onChange={handleChange("mood")}
          />
          <label htmlFor="neutral" className="cursor-pointer text-3xl">
            😐
          </label>

          <input
            type="radio"
            id="sad"
            name="mood"
            value="sad"
            onChange={handleChange("mood")}
          />
          <label htmlFor="sad" className="cursor-pointer text-3xl">
            😞
          </label>
        </div>
      </div>

      {/* Rating Selection */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-gray-700">
          Rate the quality of the product (1-5)
        </label>
        <div className="mt-2 flex items-center space-x-4">
          {[1, 2, 3, 4, 5].map((rating) => (
            <React.Fragment key={rating}>
              <input
                type="radio"
                id={`quality${rating}`}
                name="rating"
                value={rating}
                onChange={handleChange("rating")}
              />
              <label
                htmlFor={`quality${rating}`}
                className="border border-gray-300 rounded-md px-3 py-1 cursor-pointer mr-4 transition-colors hover:bg-gray-200"
              >
                {rating}
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Checkbox Selection */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-gray-700">
          Best feature of Xpense for you
        </label>
        <div className="mt-2 flex flex-col space-y-2">
          <label htmlFor="feature1">
            <input
              type="checkbox"
              id="feature1"
              name="checkbox"
              value="easy-to-use"
              onChange={handleChange("checkbox")}
              className="mr-2"
            />
            Easy to Use
          </label>
          <label htmlFor="feature2">
            <input
              type="checkbox"
              id="feature2"
              name="checkbox"
              value="efficient-budgeting"
              onChange={handleChange("checkbox")}
              className="mr-2"
            />
            Efficient Budgeting
          </label>
          <label htmlFor="feature3">
            <input
              type="checkbox"
              id="feature3"
              name="checkbox"
              value="detailed-reports"
              onChange={handleChange("checkbox")}
              className="mr-2"
            />
            Detailed Reports
          </label>
        </div>
      </div>

      {/* Feedback Message */}
      <div className="mb-6">
        <label className="block text-sm font-bold text-gray-700">
          Your Feedback
        </label>
        <textarea
          id="message"
          name="message"
          cols={40}
          onChange={handleChange("message")}
          className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
      >
        Submit
      </button>
    </form>
  );
}
