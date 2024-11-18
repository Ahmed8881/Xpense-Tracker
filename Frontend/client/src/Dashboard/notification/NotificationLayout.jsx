import React, { useEffect } from "react";
import { useGlobalContext } from "../GlobalData/globalContext";
import Notification from "./Notification";
import { dateFormat } from "../GlobalData/dateFormat";
import { notificationIcon } from "../GlobalData/Icons";

export default function NotificationLayout() {
  const { getNotification, notification, deleteNotification } =
    useGlobalContext();
  useEffect(() => {
    getNotification();
  }, []);
  return (
    <section section className="animate__animated animate__fadeIn">
      <header className="space-y-3 m-5">
        <h1
          className="text-4xl font-bold"
          style={{ fontFamily: "Kaushan Script" }}
        >
          Your Notifications
        </h1>
        <p className="text-lg">See your Notifications here 😃</p>
      </header>
      <main className="recent-activity  flex justify-center items-center space-x-16 mb-4 ">
        <div
          class="div h-[30rem] w-full  m-auto rounded-[1em] relative group p-2 z-0 overflow-y-scroll mx-40"
          style={{ scrollbarWidth: "none" }}
        >
          <time class="text-lg flex justify-center relative items-center space-x-2 font-semibold text-gray-900 dark:text-white my-8">
            <h1 className="text-center text-xl">Notification</h1>
            <h1 className=" h-6 w-6 absolute bottom-2 right-[24.7rem] text-white text-xs bg-green-400 rounded-full flex justify-center items-center">
              {notification.length}
            </h1>
          </time>
          <div className="flex justify-center items-center w-full my-4">
            <ol class="flex flex-col space-y-4 items-center justify-center w-full">
              {notification.map((item) => {
                return (
                  <Notification
                    message={item.message}
                    createdAt={dateFormat(item.createdAt)}
                    deleteNotification={deleteNotification}
                    id={item.id}
                  />
                );
              })}
            </ol>
          </div>
        </div>
      </main>
    </section>
  );
}
