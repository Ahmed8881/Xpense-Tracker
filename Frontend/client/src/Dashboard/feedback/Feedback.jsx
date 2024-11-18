import React from "react";
import AddFeedback from "./AddFeedback";

export default function Feedback() {
  return (
    <section
      className=" h-screen"
      style={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(27,197,112,1) 35%, rgba(0,212,255,1) 100%)",
      }}
    >
      <div className="relative">
        {/* <!-- Blue circle background --> */}
        <div className="absolute bg-transparent shadow-2xl aspect-square w-96 rounded-full -top-48 -left-24 opacity-50"></div>

        {/* <!-- Form container --> */}
        <div className=" flex flex-col justify-center items-center  p-8 rounded-lg  relative">
          <h2
            className="text-4xl font-semibold mb-4 "
            style={{ fontFamily: "Kaushan Script" }}
          >
            FeeDBacK Form
          </h2>
          <AddFeedback />
        </div>
      </div>
    </section>
  );
}
