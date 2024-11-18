import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "./GlobalData/globalContext";
import Expense from "./Expenses/Expense";
import { historyIcon } from "./GlobalData/Icons";

function History() {
  const { transactionHistory } = useGlobalContext();

  const [...history] = transactionHistory();
  return (
    <>
      {history.map((item) => {
        const { id, title, amount, description } = item;
        return (
          <li key={id}>
            <a
              href="#"
              class="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div className="mx-3 text-xl bg-[#07271f] text-white w-10 h-10 rounded-full flex justify-center items-center">{historyIcon}</div>
              <div>
                <div class="text-base font-normal text-gray-600 dark:text-gray-400">
                  <span class="font-extrabold text-lg text-gray-900 dark:text-white">
                    {title}
                  </span>
                </div>
                <span class="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                  <p className="text-xs">{description}</p> - <span  className="font-bold  text-base">${amount}</span>
                </span>
              </div>
            </a>
          </li>
        );
      })}
    </>
  );
}

const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .history-item {
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export default History;
