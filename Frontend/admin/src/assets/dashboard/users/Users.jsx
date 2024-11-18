import React from "react";
import { trash, userIcon, viewIcon } from "../../utils/icons";
import { useGlobalContext } from "../../utils/globalContext";

export default function Users({ user }) {
  const handleEditClick = () => {
    localStorage.setItem("active", 2);
    localStorage.setItem("selectedUser", JSON.stringify(user));
    // relaods the page
    window.location.reload();
  };
  const { deleteUser } = useGlobalContext();
  return (
    <tr class="bg-white border-b text-base  dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
      <td class="p-4 flex items-center">
        <div className="mx-3 text-xl bg-[#07271f] text-white w-10 h-10 rounded-full flex justify-center items-center">
          {userIcon}
        </div>
        <div>{user.name}</div>
      </td>
      <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
        {user.email}
      </td>
      <td class=" py-4 font-semibold text-gray-900 dark:text-white space-x-2">
        <button className="btn" onClick={handleEditClick}>
          View {viewIcon}
        </button>
        <button onClick={() => deleteUser(user.id)} className="btn">
          Delete {trash}
        </button>
      </td>
    </tr>
  );
}
