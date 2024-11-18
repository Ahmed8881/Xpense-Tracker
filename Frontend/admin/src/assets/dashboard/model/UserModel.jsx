import React, { useEffect } from "react";
import Cards from "./Cards";
import { useGlobalContext } from "../../utils/globalContext";
import Feedback from "./Feedback";

export default function UserModel() {
  // get user from local storage
  const user = JSON.parse(localStorage.getItem("selectedUser"));
  const {
    getIncome,
    getExpense,
    getGoals,
    getFeedback,
    expenses,
    incomes,
    goals,
    feedback,
  } = useGlobalContext();
  useEffect(() => {
    getIncome(user.id);
    getExpense(user.id);
    getGoals(user.id);
    getFeedback(user.id);
    console.log(feedback);
  }, []);
  const totalIncomes = incomes.reduce((acc, item) => acc + item.amount, 0);
  const totalExpenses = expenses.reduce((acc, item) => acc + item.amount, 0);
  const totalGoals = goals.reduce((acc, item) => acc + item.amount, 0);
  return (
    <>
      <div className="flex items-center w-full">
        <header className="space-y-3 m-5 ">
          <h1
            className="text-4xl font-bold  text-[#07271f]"
            style={{ fontFamily: "Kaushan Script" }}
          >
            {user.name}
          </h1>
          <p className="text-lg">
            View {user.name}'s incomes, expenses and goals here
          </p>
        </header>
        <div className="ml-auto p-6"></div>
      </div>

      <Cards
        totalIncomes={totalIncomes}
        totalExpenses={totalExpenses}
        totalGoals={totalGoals}
      />
      <header className="text-start m-10 font-medium text-lg">
        <h1>View what {user.name} says</h1>
      </header>
      <div class="relative overflow-x-auto shadow-2xl sm:rounded-lg mx-32">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead
            class="text-base
         text-white uppercase bg-[#07271f] dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="px-16 py-3">
                <span class="sr-only">Image</span>
              </th>
              <th scope="col" class="px-6 py-3">
                App Ratings
              </th>
              <th scope="col" class="px-6 py-3">
                Mood
              </th>
              <th scope="col" class="px-6 py-3">
                Usage Of App
              </th>
            </tr>
          </thead>
          <tbody>
            {feedback.length === 0 ? (
              <p className="flex justify-center items-center w-full py-10 text-xl text-gray-500">
                No Feedbacks
              </p>
            ) : (
              feedback.map((f) => {
                const { id, message, rating, mood, checkbox } = f;
                return (
                  <Feedback
                    key={id}
                    id={id}
                    message={message}
                    rating={rating}
                    mood={mood}
                    checkbox={checkbox}
                  />
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
