import React from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useGlobalContext } from "../GlobalData/globalContext";
import { dateFormat } from "../GlobalData/dateFormat";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

function GoalsChart() {
  const { incomes, expense, goals } = useGlobalContext();

  const allDates = [...incomes, ...expense, ...goals]
    .map((item) => dateFormat(item.date))
    .sort((a, b) => new Date(a) - new Date(b));

  const uniqueDates = [...new Set(allDates)]; // Uses Set to remove duplicates

  const incomeData = incomes.map((income) => income.amount);
  const expenseData = expense.map((expense) => expense.amount);

  const goalTargetData = goals.map((goal) => goal.amount);

  const data = {
    labels: uniqueDates,
    datasets: [
      {
        label: "Income",
        data: incomeData,
        backgroundColor: "green",
        tension: 0.2,
      },
      {
        label: "Expenses",
        data: expenseData,
        backgroundColor: "red",
        tension: 0.2,
      },
      {
        label: "Goals (Target)",
        data: goalTargetData,
        backgroundColor: "blue",
        tension: 0.2,
        borderColor: "blue",
        pointStyle: "star",
      },
    ],
  };

  return (
    <div className="chart-container shadow-2xl">
     
        <div className="bg-white rounded-md w-[38rem] h-80 p-4 flex justify-center items-center">
          <Line data={data} />
        </div>
      
    </div>
  );
}

export default GoalsChart;
