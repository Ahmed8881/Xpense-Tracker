import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
const BASE_URL = `http://xpensetracker1.azurewebsites.net/api/v1/`;
const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [incomes, setIncomes] = useState([]);
  const [expense, setExpense] = useState([]);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [notification, setNotification] = useState([]);
  const [goals, setGoals] = useState([]);

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("users")) || null
  );
  /**
   * The function `addIncome` is an asynchronous function that sends a POST request to add income data
   * to a server and handles the response accordingly.
   */
  const addIncome = async (income) => {
    var success = false;
    const response = await axios
      .post(`${BASE_URL}add-income`, income)
      .catch((err) => {
        setError(err.response.data.message);
        alert(err.response.data.message);
        return success;
      });
    if (response && response.data) {
      alert("Income Added Successfully");
      getIncomes();
      success = true;
      return success;
    }
  };

  /**
   * The function `getIncomes` fetches income data based on category and sorting criteria using an
   * asynchronous request.
   */
  const getIncomes = async (category, sortBy) => {
    try {
      const response = await axios.get(`${BASE_URL}get-income/${user.id}`, {
        params: {
          category: category,
          sortBy: sortBy,
        },
      });
      setIncomes(response.data);
    } catch (error) {
      console.error("Error fetching incomes:", error);
    }
  };
  /**
   * The function `deleteIncome` deletes an income by sending a DELETE request to the server and displays
   * an alert message based on the response.
   */

  const deleteIncome = async (id) => {
    console.log(id);
    const response = await axios
      .delete(`${BASE_URL}delete-income/${id}`)
      .catch((err) => {
        setError(err.response.data.message);
        alert(err.response.data.message);
      });
    if (response && response.data) {
      alert("Income Deleted Successfully");
    }
    getIncomes();
    console.log("I am hitted");
  };

  /**
   * The function `addExpense` is an asynchronous function that sends a POST request to add an expense
   * to a server and handles the response accordingly.
   */
  const addExpense = async (expense) => {
    var success = false;
    const response = await axios
      .post(`${BASE_URL}add-expense`, expense)
      .catch((err) => {
        setError(err.response.data.message);
        alert(err.response.data.message);
        return success;
      });
    if (response && response.data) {
      alert("Expense Added Successfully");
      getExpenses();
      success = true;
      return success;
    }
  };
  /**
   * The function `getExpenses` fetches expenses based on a specified category and sorting criteria using
   * an asynchronous request.
   */
  const getExpenses = async (category, sortBy) => {
    try {
      const response = await axios.get(`${BASE_URL}get-expense/${user.id}`, {
        params: {
          category: category,
          sortBy: sortBy,
        },
      });
      setExpense(response.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    }
  };
  /**
   * The `deleteExpenses` function sends a DELETE request to the server to delete an expense with a
   * specific ID and then refreshes the list of expenses.
   */
  const deleteExpenses = async (id) => {
    const response = await axios.delete(`${BASE_URL}delete-expense/${id}`);
    getExpenses();
  };

  const updateExpense = async (expense) => {
    const response = await axios
      .put(`${BASE_URL}update-expense`, expense)
      .catch((err) => {
        setError(err.response.data.message);
        alert(err.response.data.message);
      });
    if (response && response.data) {
      alert("Expense Updated Successfully");
      getExpenses();
    }
  };

  /**
   * The functions handle user sign up, sign in, and sign out operations in a React application
   * using asynchronous requests.
   * @returns The `signUp` and `signIn` functions are returning a boolean value indicating whether
   * the sign-up or sign-in operation was successful. The `signOut` function does not return anything
   * as it simply updates the user state and removes user data from local storage.
   */
  const signUp = async (user) => {
    let success = false;
    const response = await axios
      .post(`${BASE_URL}signup`, user)
      .catch((err) => {
        alert(err.response.data.message);
        setError(err.response.data.message);
      });
    if (response && response.data) {
      alert("Signed up successfully. Please login to continue.");
      success = true;
    }
    return success;
  };
  const signIn = async (user) => {
    let success = false;
    const response = await axios
      .post(`${BASE_URL}signin`, user)
      .catch((err) => {
        alert(err.response.data.message);
        setError(err.response.data.message);
      });
    if (response && response.data) {
      alert("Logged in successfully");
      setUser(response.data.user);
      localStorage.setItem("users", JSON.stringify(response.data.user));
      console.log("User data:", response.data.user);
      success = true;
      console.log(user);
    }
    return success;
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem("users");
    localStorage.removeItem("totalBalance");
    localStorage.removeItem("active");
  };
  const updateUser = async (user) => {
    const response = await axios
      .put(`${BASE_URL}update-user`, user)
      .catch((err) => {
        setError(err.response.data.message);
        alert(err.response.data.message);
      });
    if (response && response.data) {
      alert("User Updated Successfully");
      setUser(response.data);
      localStorage.setItem("users", JSON.stringify(response.data.user));
      // reload the page
      window.location.reload();
    }
  };
  const addCategory = async (category) => {
    const response = await axios
      .post(`${BASE_URL}add-category`, category)
      .catch((err) => {
        setError(err.response.data.message);
        alert(err.response.data.message);
      });
    if (response && response.data) {
      alert("Category Added Successfully");
    }
  };
  const getCategories = async () => {
    try {
      const response = await axios.get(`${BASE_URL}get-category`);
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const getNotification = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}get-notification/${user.id}`
      );
      setNotification(response.data);
    } catch (error) {
      console.error("Error fetching notification:", error);
    }
  };
  /**
   * The functions calculate the total income, total expense, and total balance based on the
   * amounts provided in the 'incomes' and 'expense' arrays.
   * @returns The `totalBalance` function is returning the difference between the total income and
   * the total expense, calculated by calling the `totalIncome()` and `totalExpense()` functions
   * respectively.
   */
  const sendNotification = async (notification) => {
    const response = await axios
      .post(`${BASE_URL}add-notification`, notification)
      .catch((err) => {
        setError(err.response.data.message);
        alert(err.response.data.message);
      });
    if (response && response.data) {
      alert(notification.message);
    }
  };
  const deleteNotification = async (id) => {
    const response = await axios.delete(`${BASE_URL}delete-notification/${id}`);
    getNotification();
  };

  const getGoals = async () => {
    try {
      const response = await axios.get(`${BASE_URL}get-goal/${user.id}`);
      setGoals(response.data);
    } catch (error) {
      console.error("Error fetching goals:", error);
    }
  };
  const addGoal = async (goal) => {
    var success = false;
    const response = await axios
      .post(`${BASE_URL}add-goal`, goal)
      .catch((err) => {
        setError(err.response.data.message);
        alert(err.response.data.message);
        return success;
      });
    if (response && response.data) {
      alert("Goal Added Successfully");
      getGoals();
      success = true;
      return success;
    }
  };
  const addFeedback = async (feedback) => {
    var success = false;
    const response = await axios
      .post(`${BASE_URL}add-feedback`, feedback)
      .catch((err) => {
        setError(err.response.data.message);
        alert(err.response.data.message);
        return success;
      });
    if (response && response.data) {
      alert("Feedback Added Successfully");
      success = true;
      return success;
    }
  };
  /**
   * The `deleteGoal` function sends a DELETE request to the server to delete a goal with the specified
   * ID, then reloads the page to update the chart.
   */
  const deleteGoal = async (id) => {
    const response = await axios.delete(`${BASE_URL}delete-goal/${id}`);
    getGoals();
    getIncomes();
    getExpenses();
  };
  const totalIncome = () => {
    let total = 0;
    incomes.forEach((income) => {
      total += income.amount;
    });
    return total;
  };
  const totalExpense = () => {
    let total = 0;
    expense.forEach((exp) => {
      total += exp.amount;
    });
    return total;
  };
  const totalBalance = () => {
    let totalBalance = totalIncome() - totalExpense();

    return totalBalance;
  };
  const transactionHistory = () => {
    const history = [...incomes, ...expense];
    history.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return history.slice(0, 3);
  };
  return (
    <GlobalContext.Provider
      value={{
        addIncome,
        getIncomes,
        incomes,
        totalIncome,
        addExpense,
        deleteExpenses,
        getExpenses,
        expense,
        deleteIncome,
        totalExpense,
        totalBalance,
        signUp,
        signIn,
        user,
        signOut,
        transactionHistory,
        getCategories,
        addCategory,
        categories,
        getNotification,
        notification,
        sendNotification,
        deleteNotification,
        updateUser,
        getGoals,
        goals,
        addGoal,
        deleteGoal,
        updateExpense,
        addFeedback,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
