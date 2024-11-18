import React from "react";
import { expense, trash } from "../../utils/icons";

export default function CategoryItem({ type, name, id, deleteCategory }) {
  return (
    <tr class="bg-white border-b text-base  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td class="p-4 flex items-center">
        <div className="mx-3 text-xl bg-[#07271f] text-white w-10 h-10 rounded-full flex justify-center items-center">
          {" "}
          {expense}
        </div>
        <div>{type}</div>
      </td>
      <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {name}
      </td>
      <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        <button className="btn" onClick={() => deleteCategory(id)}>
          {trash}
        </button>
      </td>
    </tr>
  );
}
