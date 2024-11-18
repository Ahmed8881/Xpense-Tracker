import React, { useEffect } from "react";
import { useGlobalContext } from "./GlobalData/globalContext";
import { dollar } from "./GlobalData/Icons";
import Chart from "./Chart";
import ChartExample from "./Chart";
import History from "./History";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const {
    user,
    totalIncome,
    getIncomes,
    totalExpense,
    getExpenses,
    totalBalance,
    sendNotification,
  } = useGlobalContext();
  useEffect(() => {
    getIncomes();
    getExpenses();
  }, 10);

  var total = localStorage.getItem("totalBalance");
  console.log(total);
  useEffect(() => {
    if (total != totalBalance()) {
      const thrsholdCheck = () => {
        let message = "";
        if (totalBalance() < 0) {
          message = "Your balance is negative";
        }
        if (totalBalance() > 230000) {
          message = "Your balance is high, Seems like you are doing well";
        }
        if (message !== "") createNotification(message);
        localStorage.setItem("totalBalance", totalBalance());
      };
      thrsholdCheck();
    }
  }, []);

  const createNotification = (message) => {
    const notification = {
      user_id: user.id,
      message: message,
    };
    sendNotification(notification);
  };
  return (
    <section className="animate__animated animate__fadeIn">
      <div className="header flex items-center justify-between p-6  border border-b-white">
        <div className="">
          <h1 className="text-4xl text-white">
            Welcome{" "}
            <span
              className="text-[#07271f]"
              style={{ fontFamily: "Kaushan Script" }}
            >
              {user.name}
            </span>
          </h1>
        </div>
        <div className="">
          <form className="flex items-center max-w-sm mx-auto">
            <label for="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500  focus:border-green-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                placeholder="Search branch name..."
                required
              />
            </div>
            <button
              type="submit"
              className="p-2.5 ms-2 text-sm font-medium text-white bg-[#07271f] rounded-lg border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-500 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
        <div className="bell-icon flex justify-center items-center">
          <h1 className="text-2xl">Support</h1>
          <Link to="/feedback">
            <img
              src="https://cdn-icons-png.flaticon.com/128/15184/15184701.png"
              className="w-14 h-14"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div className="chartbar-container flex flex-col md:flex-row justify-center items-center mx-16 mt-6 mb-4">
        <div className="col01 w-[75%] h-auto flex justify-center items-center">
          <ChartExample />
        </div>
        <div className="col02 w-[40%] h-auto">
          <div className="flex flex-col justify-center items-center space-y-4">
            <div className="group w-72 rounded-lg bg-green-500 p-8 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_green] flex justify-center items-center space-x-10">
              <p className="text-white text-2xl">Incomes</p>
              <p className="text-white text-2xl">${totalIncome()}</p>
            </div>
            {/* card 02 */}
            <div className="group w-72 rounded-lg bg-red-500 p-8 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_#690303] flex justify-center items-center space-x-10">
              <p className="text-white text-2xl">Expenses</p>
              <p className="text-white text-2xl">${totalExpense()}</p>
            </div>
            {/* card 03 */}
            <div className="group w-72 rounded-lg bg-blue-500 p-8 transition relative duration-300 cursor-pointer hover:translate-y-[3px] hover:shadow-[0_-8px_0px_0px_blue] flex justify-center items-center space-x-10">
              <p className="text-white text-2xl">Balance</p>
              <p className="text-white text-2xl">${totalBalance()}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="recent-activity mx-16 flex justify-center items-center space-x-16 mb-4 relative">
        <div
          className=" col01 p-5 w-full border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 overflow-y-scroll h-44"
          style={{ scrollbarWidth: "none" }}
        >
          <time className="text-lg font-semibold text-gray-900  dark:text-white">
            <h1 className="text-2xl font-bold m-4">Recent Activity</h1>
          </time>
          <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700 ">
            <History />
          </ol>
        </div>
        <div className=" absolute bottom-0 right-6">
          <img
            src="https://cdn-icons-png.flaticon.com/256/6009/6009244.png"
            className=""
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
