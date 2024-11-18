import React from "react";
import Chart from "../Chart";
import GoalsAside from "./GoalsAside";
import GoalsChart from "./GoalsChart";
import Goals from "./Goals";
import { useGlobalContext } from "../GlobalData/globalContext";
import { dateFormat } from "../GlobalData/dateFormat";
import GoalsForm from "./AddGoals";

export default function GoalsLayout() {
  const { user, getGoals, goals, deleteGoal } = useGlobalContext();
  React.useEffect(() => {
    getGoals();
  }, [user.id]);
  return (
    <main className="animate__animated animate__fadeIn">
      <header className="space-y-3 m-5">
        <h1
          className="text-4xl font-bold"
          style={{ fontFamily: "Kaushan Script" }}
        >
          Your Goals
        </h1>
        <p className="text-lg">Track Your Goals Progress here 😃</p>
      </header>
      <div className="flex justify-center items-center w-full space-x-10 my-8">
        <div className="chart-container">
          <GoalsChart />
        </div>
        <div className="total-goals-container">
          <GoalsAside totalGoals={goals.length} />
        </div>
      </div>
      <footer>
        <div className="goals-container bg-transparent  p-10 h-60 rounded-md mx-10">
          <header className="flex justify-center items-center  ">
            <div className="title">
              <h1
                className="text-4xl font-bold"
                style={{ fontFamily: "Kaushan Script" }}
              >
                Goals
              </h1>
            </div>
            <div className="button ml-auto">
              <button
                className="btn bg-[#07271f] rounded-btn text-lg text-white"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Add Goal
              </button>
              <dialog id="my_modal_5" className="modal  modal-middle">
                <div className="modal-box ">
                  <GoalsForm />
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          </header>
          <div
            class="relative overflow-x-auto overflow-y-scroll h-[7.8rem] shadow-2xl sm:rounded-lg mx-32"
            style={{ scrollbarWidth: "none" }}
          >
            <table class="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 relative">
              <thead
                class="text-base
         text-white uppercase bg-[#07271f] sticky top-0 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr className="">
                  <th scope="col" class="px-16 py-3 ">
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
                {goals.map((goal) => {
                  const { id, title, amount, description, createdAt } = goal;
                  return (
                    <Goals
                      key={id}
                      id={id}
                      title={title}
                      description={description}
                      amount={amount}
                      createdAt={dateFormat(createdAt)}
                      deleteGoal={deleteGoal}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </footer>
    </main>
  );
}
