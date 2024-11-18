import React from "react";
import { goalIcon } from "../GlobalData/Icons";

export default function Goals({
  title,
  description,
  amount,
  createdAt,
  deleteGoal,
  id,
}) {
  return (
    <tr class="bg-white border-b text-base  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td class="p-4 flex items-center">
        <div className="mx-3 text-xl bg-[#07271f] text-white w-10 h-10 rounded-full flex justify-center items-center">
          {goalIcon}
        </div>
        <div>{title}</div>
      </td>
      <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {description}
      </td>
      <td class="px-6 py-4">
        <div class="flex items-center">{createdAt}</div>
      </td>
      <td class="px-6 py-4 font-semibold text-gray-900  dark:text-white">
        {amount}
      </td>
      <td class="px-6 py-4">
        <button
          onClick={() => deleteGoal(id)}
          href="#"
          class="font-medium text-red-600 dark:text-red-500 hover:underline"
        >
          Remove
        </button>
      </td>
    </tr>
  );
}
