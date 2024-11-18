import React from "react";
import { useGlobalContext } from "../../utils/globalContext";

export default function Header() {
  const { users } = useGlobalContext();
  return (
    <section>
      <div className="flex justify-center items-center w-full space-x-8">
        <div class=" card-1   bg-white w-56 h-24 rounded-lg p-2">
          <div class="flex p-2 gap-1">
            <div class="">
              <span class="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div class="circle">
              <span class="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div class="circle">
              <span class="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
            </div>
          </div>
          <div class="card__content font-bold text-lg">
            <h1>
              Total Users <span>{users.length}</span>
            </h1>
          </div>
        </div>

        <div class=" card-2 bg-white w-56 h-24 p-2 rounded-lg">
          <div class="flex p-2 gap-1">
            <div class="">
              <span class="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div class="circle">
              <span class="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div class="circle">
              <span class="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
            </div>
          </div>
          <div class="card__content font-bold text-lg">
            <h1>Average Response <span>🙂</span></h1>
          </div>
        </div>

        <div class=" card-3 bg-white w-56 h-24 p-2 rounded-lg">
          <div class="flex p-2 gap-1">
            <div class="">
              <span class="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div class="circle">
              <span class="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
            </div>
            <div class="circle">
              <span class="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
            </div>
          </div>
          <div class="card__content font-bold text-lg">
            <h1>App Rankings <span>4</span></h1>
          </div>
        </div>
      </div>
    </section>
  );
}
