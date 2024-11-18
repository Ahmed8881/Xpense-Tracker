import React from "react";
import { useGlobalContext } from "../GlobalData/globalContext";
import { deleteIcon, notificationIcon } from "../GlobalData/Icons";

export default function Notification({
  message,
  createdAt,
  id,
  deleteNotification,
}) {
  const { user } = useGlobalContext();
  return (
    <div class="rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-row w-full hover:shadow-2xl transition-all duration-500 shadow-lg">
      <div class="h-full w-[50%] bg-green-300 absolute left-[0%] top-full z-[-1] group-hover:-translate-y-full duration-[400ms] delay-[50ms]"></div>
      <div class="h-full w-[50%] bg-pink-300 absolute left-[50%] bottom-full z-[-1] group-hover:translate-y-full duration-[400ms] delay-[200ms]"></div>
      <div class="text-gray-500 group-hover:scale-125 transition-all">
        <div className="h-10 w-10 bg-black text-white flex justify-center items-center rounded-full">
          {notificationIcon}
        </div>
      </div>
      <div class="group-hover:pb-8 transition-all duration-500 delay-200 mx-2">
        <h1 class="font-semibold text-gray-700">{user.name}</h1>
        <p class="text-gray-500 text-sm">{createdAt}</p>
      </div>
      <button
        onClick={() => deleteNotification(id)}
        className="btn absolute top-4 right-8"
      >
        {deleteIcon}
      </button>
      <div class="flex transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute justify-self-start">
        {/* content */}
        <p className="ml-10">{message}</p>
      </div>
    </div>
  );
}
