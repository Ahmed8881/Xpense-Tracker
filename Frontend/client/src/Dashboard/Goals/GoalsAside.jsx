import React from "react";
import { useGlobalContext } from "../GlobalData/globalContext";

export default function GoalsAside({ totalGoals }) {
  const { totalBalance, goals } = useGlobalContext();

  const estimateProgress = (goal) => {
    console.warn(
      "Goal object missing 'progress'. Estimating progress based on 'amount'."
    );

    const targetCompletion = 100;
    return Math.min(targetCompletion, (totalBalance() / goal.amount) * 100);
  };

  const categorizeGoal = (goal) => {
    const estimatedProgress = estimateProgress(goal);

    const onTrackThreshold = 75;
    const offTrackThreshold = 50;

    if (estimatedProgress >= onTrackThreshold) {
      return "On Track";
    } else if (
      estimatedProgress >= offTrackThreshold &&
      estimatedProgress < onTrackThreshold
    ) {
      return "Off Track (Funding Available)";
    } else {
      return "At Risk";
    }
  };

  const updateGoalProgress = (goalId, newProgress) => {
    console.log(`Updating progress for goal ${goalId} to ${newProgress}`);
  };

  const categorizedGoals = goals.map((goal) => ({
    title: goal.title,
    amount: goal.amount,
    description: goal.description,
    progress: categorizeGoal(goal),
  }));

  return (
    <aside>
      <div class=" h-80 w-[26rem] mx-auto bg-gray-100 rounded-xl shadow-2xl">
        <div class="flex items-center p-3">
          <div class="px-1">
            <span class="w-4 h-4 rounded-full inline-block bg-[green] cursor-pointer"></span>
          </div>
          <div class="px-1">
            <span class="w-4 h-4 rounded-full inline-block bg-[red] cursor-pointer"></span>
          </div>
          <div class="px-1">
            <span class="w-4 h-4 rounded-full inline-block bg-[blue] cursor-pointer"></span>
          </div>
        </div>
        <div className="header text-center relative">
          <h1 className="text-xl font-bold">Total Goals</h1>
          <div className="absolute bottom-2 right-36 h-6 w-6 text-xs rounded-full bg-green-500 text-white flex justify-center items-center">
            {totalGoals}
          </div>
        </div>
        <div
          className="grid-container mx-5 my-4 h-48 overflow-y-scroll grid grid-cols-1 gap-2 place-items-center text-white "
          style={{ scrollbarWidth: "none" }}
        >
          {categorizedGoals.map((goal) => (
            <div
              key={goal.title}
              className={`relative group  cursor-pointer group overflow-hidden shadow-lg h-[11.5rem] w-72  rounded-2xl hover:duration-700 duration-700 bg-${
                goal.progress === "On Track"
                  ? "green-500"
                  : goal.progress === "Off Track (Funding Available)"
                  ? "blue-500"
                  : goal.progress === "At Risk"
                  ? "red-500"
                  : "gray-400"
              } border-gray-300`}
            >
              <div class={`w-72 h-72  text-white p-2`}>
                <div class="flex flex-row justify-between text-2xl">
                  {goal.progress}
                </div>
                <div class="  text-lg font-serif">
                  {goal.description} - ${goal.amount}
                </div>
              </div>
              <div class="absolute bg-gray-50  -bottom-24 w-72 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500">
                <span class="text-gray-800 font-bold text-xl">
                  {goal.title}
                </span>
                <p class="text-neutral-800">
                  <input
                    type="range"
                    id={`progress-${goal.title}`}
                    min="0"
                    max="100"
                    value={estimateProgress(goal)}
                    onChange={(e) =>
                      updateGoalProgress(goal.title, e.target.value)
                    }
                  />
                </p>
                <label
                  htmlFor={`progress-${goal.title}`}
                  className="font-bold text-lg text-black"
                >
                  Estimated Progress:{" "}
                  <div className="font-medium text-lg font-serif">
                    {estimateProgress(goal)}%
                  </div>
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
