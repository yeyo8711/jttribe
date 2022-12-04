import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";

const Main = () => {
  const { userAddress, netWork } = useContext(AppContext);
  return (
    <div className="w-full py-10 flex justify-center items-center">
      <div class="mx-5 grid place-content-center">
        <div class="bg-gradient-to-r from-blue-400 to-indigo-500 rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto">
          <h1 class="text-3xl mb-3">Welcome!</h1>
          <p class="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            aliquid
          </p>
        </div>
        <div class="bg-white py-8 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
          <h2 class="font-semibold text-2xl mb-6">Start chatting</h2>
          <img
            class="w-20 h-20 object-cover rounded-full mx-auto shadow-lg"
            src="https://images.unsplash.com/photo-1611342799915-5dd9f1665d04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="User avatar"
          />
          <p class="capitalize text-xl mt-1">fred the turtle</p>
          <span class="flex items-center border rounded-full w-24 pr-2 justify-center mx-auto mt-2 mb-12">
            <div class="bg-green-400 rounded-full w-2.5 h-2.5 block mr-2"></div>
            Pre-sale
          </span>
          <button class="rounded-md bg-gradient-to-r from-blue-400 to-indigo-500 text-xl text-white pt-3 pb-4 px-8 inline">
            Purchase $FRED
          </button>
        </div>
      </div>
    </div>
  );
};
export default Main;
