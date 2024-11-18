import React, { useEffect } from "react";
import Header from "./Header";
import DashboardChart from "./DashboardCharts";
import Users from "./Users";
import { useGlobalContext } from "../../utils/globalContext";

export default function Dashboard() {
  const { getUsers, users } = useGlobalContext();
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <main class="ease-soft-in-out  xl:ml-68.5 relative h-full  rounded-xl transition-all duration-200">
        <header className="space-y-3 m-5 ">
          <h1
            className="text-4xl font-bold  text-[#07271f]"
            style={{ fontFamily: "Kaushan Script" }}
          >
            All Users
          </h1>
          <p className="text-lg">View all users here</p>
        </header>
        <div class="w-full p-6   mx-auto">
          <Header />

          <div
            className="relative my-10 overflow-x-auto overflow-y-scroll h-96 sm:rounded-lg mx-32"
            style={{ scrollbarWidth: "none" }}
          >
            <table class="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 relative">
              <thead
                class="text-base
         text-white uppercase bg-[#07271f] sticky top-0 dark:bg-gray-700 dark:text-gray-400"
              >
                <tr>
                  <th scope="col" class="px-6 py-3">
                    User Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    User Email
                  </th>
                  <th scope="col" class="px-16 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <p className="flex justify-center items-center w-full py-10 text-xl text-gray-500">
                    No Uses in the list
                  </p>
                ) : (
                  users.map((u) => {
                    return <Users user={u} />;
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
