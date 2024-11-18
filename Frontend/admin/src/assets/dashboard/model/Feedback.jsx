import React from "react";
import { feedbackIcon } from "../../utils/icons";

export default function Feedback({ message, rating, mood, checkbox, id }) {
  return (
    <tr class="bg-white border-b text-base  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td class="p-4 flex items-center">
        <div className="mx-3 text-xl bg-[#07271f] text-white w-10 h-10 rounded-full flex justify-center items-center">
          {feedbackIcon}
        </div>
        <div>{message}</div>
      </td>
      <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {rating}
      </td>
      <td class="px-6 py-4">
        <div class="flex items-center">{mood}</div>
      </td>
      <td class="px-6 py-4 font-semibold text-gray-900  dark:text-white">
        {checkbox}
      </td>
    </tr>
  );
}
