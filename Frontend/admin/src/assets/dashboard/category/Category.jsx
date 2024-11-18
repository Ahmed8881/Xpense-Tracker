import React, { useEffect } from "react";
import { useGlobalContext } from "../../utils/globalContext";
import CategoryItem from "./CategoryItem";
import AddCategory from "./AddCategory";

export default function Category() {
  const { categories, getCategory, deleteCategory } = useGlobalContext();
  useEffect(() => {
    getCategory();
  }, []);
  return (
    <section className="animate__animated animate__fadeIn">
      <div className="header flex items-center w-full p-6 border-b border-white text-white">
        <div className="w-1/2">
          <h1
            className="text-4xl font-bold text-white"
            style={{ fontFamily: "Kaushan Script" }}
          >
            Categories
          </h1>
        </div>
        <div className="w-1/2 flex justify-end items-center">
          <button
            className="btn bg-[#07271f] rounded-btn text-lg text-white"
            onClick={() => document.getElementById("my_modal_5").showModal()}
          >
            Add Category
          </button>
          <dialog id="my_modal_5" className="modal  modal-middle">
            <div className="modal-box ">
              <AddCategory />
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>

      <div
        className="relative my-10 overflow-x-auto overflow-y-scroll h-96 shadow-2xl sm:rounded-lg mx-32"
        style={{ scrollbarWidth: "none" }}
      >
        <table class="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 relative">
          <thead
            class="text-base
         text-white uppercase bg-[#07271f] sticky top-0 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" className="px-6 py-3">
                Name of Category
              </th>
              <th scope="col" className="px-6 py-3">
                Type of Category
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.length === 0 ? (
              <p className="flex justify-center items-center w-full py-10 text-xl text-gray-500">
                No expenses to display
              </p>
            ) : (
              categories.map((category) => {
                const { id, name, type } = category;
                return (
                  <CategoryItem
                    key={id}
                    id={id}
                    name={name}
                    type={type}
                    deleteCategory={deleteCategory}
                  />
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}
