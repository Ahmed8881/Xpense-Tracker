import React, { useState } from "react";
import {
  bitcoin,
  book,
  card,
  circle,
  clothing,
  comment,
  deleteIcon,
  dollar,
  editIcon,
  expense,
  expenses,
  food,
  freelance,
  income,
  medical,
  money,
  piggy,
  stocks,
  takeaway,
  tv,
  users,
  yt,
} from "../GlobalData/Icons";

export default function IncomeItem({
  id,
  title,
  amount,
  date,
  description,
  deleteItem,
}) {
  return (
    <>
      <tr class="bg-white border-b text-base  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="p-4 flex items-center">
          <div className="mx-3 text-xl bg-[#07271f] text-white w-10 h-10 rounded-full flex justify-center items-center">
            {" "}
            {expenses}
          </div>
          <div>{description}</div>
        </td>
        <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
          {title}
        </td>
        <td class="px-6 py-4">
          <div class="flex items-center">{date}</div>
        </td>
        <td class="px-6 py-4 font-semibold text-gray-900  dark:text-white">
          {dollar}
          {amount}
        </td>
        <td class="px-6 py-4">
          <button
            href="#"
            class="btn font-medium text-red-600 dark:text-red-500 hover:underline"
            onClick={() => deleteItem(id)}
          >
            {deleteIcon}
          </button>
        </td>
      </tr>
    </>
  );
}
