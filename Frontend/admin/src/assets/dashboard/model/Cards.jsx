import React from "react";
import { dollar, expense, expenses, goalIcon, income } from "../../utils/icons";

export default function Cards({ totalIncomes, totalExpenses, totalGoals }) {
  console.log(totalGoals);
  return (
    <div className="cards-container flex space-x-10 my-4   flex-wrap justify-center items-center w-full">
      <div class=" card-1 div h-[10em] w-[20em] bg-white  rounded-[1em] overflow-hidden relative group p-2 z-0">
        <div class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-green-500 group-hover:scale-[800%] duration-500 z-[-1] op"></div>

        <h1 class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]">
          Total Incomes
        </h1>
        <div className="font-bold text-xl">
          {dollar}
          {totalIncomes}
        </div>
        <div className="icon absolute right-2 bottom-4 text-2xl font-bold w-10 aspect-square rounded-full flex justify-center items-center bg-black text-white">
          {income}
        </div>
      </div>

      <div class=" card-2 div h-[10em] w-[20em] bg-white  rounded-[1em] overflow-hidden relative group p-2 z-0">
        <div class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-red-500 group-hover:scale-[800%] duration-500 z-[-1] op"></div>

        <h1 class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]">
          Total Expenses
        </h1>
        <div className="font-bold text-xl">
          {dollar}
          {totalExpenses}
        </div>
        <div className="icon absolute right-2 bottom-4 text-2xl font-bold w-10 aspect-square rounded-full flex justify-center items-center bg-black text-white">
          {expenses}
        </div>
      </div>
      <div class=" card-3 div h-[10em] w-[20em] bg-white  rounded-[1em] overflow-hidden relative group p-6 z-0">
        <div class="circle absolute h-[5em] w-[5em] -top-[2.5em] -right-[2.5em] rounded-full bg-blue-500 group-hover:scale-[800%] duration-500 z-[-1] op"></div>

        <h1 class="z-20 font-bold font-Poppin group-hover:text-white duration-500 text-[1.4em]">
          Total Goals Amount
        </h1>
        <div className="font-bold text-xl">
          {dollar}
          {totalGoals}
        </div>
        <div className="icon absolute right-2 bottom-4 text-2xl font-bold w-10 aspect-square rounded-full flex justify-center items-center bg-black text-white">
          {goalIcon}
        </div>
      </div>
    </div>
  );
}
