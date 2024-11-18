import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Dashboard from "./Dashboard";
import Income from "./Incomes/Income";
import Expense from "./Expenses/Expense";
import Form from "./Incomes/AddIncome";
import Notification from "./notification/Notification";
import Goals from "./Goals/Goals";
import GoalsLayout from "./Goals/GoalsLayout";
import Profile from "./Profile/Profile";
import NotificationLayout from "./notification/NotificationLayout";

export default function MainDashboard() {
  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <GoalsLayout />;
      case 3:
        return <Income />;
      case 4:
        return <Expense />;
      case 5:
        return <NotificationLayout />;
      default:
        return <Profile />;
    }
  };
  // Retrieve active state from local storage, default to 1 if not found
  const initialActive = localStorage.getItem("active") || 1;
  const [active, setActive] = useState(parseInt(initialActive));

  // Update local storage whenever active state changes
  useEffect(() => {
    localStorage.setItem("active", active);
  }, [active]);
  return (
    <section className="bg-[#03d47c] max-h-screen flex">
      <Navigation active={active} setActive={setActive} />
      <main
        className="flex-grow rounded-lg  mt-2 mr-2 mb-2 overflow-y-scroll min-h-screen bg-[#bebebe]"
        style={{ scrollbarWidth: "none" }}
      >
        {displayData()}
      </main>
    </section>
  );
}
