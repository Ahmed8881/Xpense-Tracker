import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../GlobalData/globalContext";
import IncomeItem from "../Incomes/IncomeItem";
import ExpenseFrom from "./AddExpense";
import { dateFormat } from "../GlobalData/dateFormat";

export default function Expense() {
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("createdAt_desc");
  const { expense, getExpenses, deleteExpenses, getCategories, categories } =
    useGlobalContext();
  useEffect(() => {
    getExpenses(category, sortBy);
    getCategories();
  }, [category, sortBy]);
  const handleReset = () => {
    setCategory("");
    setSortBy("createdAt-dsc");
  };

  return (
    <section className="animate__animated animate__fadeIn">
      <div className="header flex items-center w-full p-6 border-b border-white text-white">
        <div className="w-1/2">
          <h1
            className="text-4xl font-bold text-[#07271f]"
            style={{ fontFamily: "Kaushan Script" }}
          >
            Expenses
          </h1>
        </div>
        <div className="w-1/2 flex justify-end items-center">
          <button
            className="btn bg-[#07271f] rounded-btn text-lg text-white"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Add Expense
          </button>
          <dialog id="my_modal_5" className="modal  modal-middle">
            <div className="modal-box ">
              <ExpenseFrom />
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      <div className="filter flex justify-center items-center space-x-4 my-6">
        <select
          value={category}
          className="px-4 py-2 rounded-md"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>
            Select Option
          </option>
          {/* Options for selecting category */}
          {categories.
            filter((category) => category.type === "Expense")
            .map((category) => {
              return (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              );
            })}
        </select>
        <select
          value={sortBy}
          className="px-4 py-2 rounded-md"
          onChange={(e) => setSortBy(e.target.value)}
        >
          {/* Options for selecting sorting */}
          <option value="createdAt-dsc" disabled>
            Select Option
          </option>
          <option value="amount_asc">Lowest to Highest (Amount)</option>
          <option value="amount_desc">Highest to Lowest (Amount)</option>
        </select>
        <div className="">
          <button
            className=" rounded-md px-4 py-2 bg-[#07271f] text-white"
            onClick={handleReset}
          >
            reset
          </button>
        </div>
      </div>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-32">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-base text-white uppercase bg-[#07271f] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-16 py-3">
                <span class="sr-only">Image</span>
              </th>
              <th scope="col" class="px-6 py-3">
                Title
              </th>
              <th scope="col" class="px-6 py-3">
                Date
              </th>
              <th scope="col" class="px-6 py-3">
                Amount
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {expense.length === 0 ? (
              <p className="flex justify-center items-center w-full py-10 text-xl text-gray-500">
                No expenses to display
              </p>
            ) : (
              expense.map((expense) => {
                const { id, title, amount, date, category, description, type } =
                  expense;
                return (
                  <IncomeItem
                    key={id}
                    id={id}
                    title={title}
                    description={description}
                    amount={amount}
                    date={dateFormat(date)}
                    type={type}
                    category={category}
                    indicatorColor="var(--color-green)"
                    deleteItem={deleteExpenses}
                  />
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
