import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";
import FTTProfile from "../../assets/FFTProfile.png";

const Main = () => {
  const { userAddress, netWork } = useContext(AppContext);
  return (
    <div className="w-full py-10 flex justify-center items-center">
      <div class="mx-5 grid place-content-center">
        <div class="bg-[#0399FC] rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto">
          <p class="text-lg font-Carter">
            Vesting, Shells, Eggs, Incubations, Rewards & the best mascot since
            Mickey Mouse. $FRED 🐢 will lead the first ever Partner Progression
            Platform on BNB Chain!
          </p>
        </div>
        <div class="py-8 bg-[#7BDCFE] px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
          <h2 class="font-Carter text-[#075424] text-2xl mb-6 capitalize">
            fred the turtle
          </h2>
          <img
            class="w-20 h-20 object-cover rounded-full mx-auto shadow-lg"
            src={FTTProfile}
            alt="User avatar"
          />
          <span className="flex font-Francois mt-5 items-center rounded-full w-24  justify-center mx-auto">
            $FRED 🐢
          </span>
          <span className="flex font-Francois items-center rounded-full w-24  justify-center mx-auto mt-2 mb-2">
            #FTT 💚
          </span>
          <button class="rounded-md font-Francois text-[#075424] bg-[#b8e220] hover:bg-[#9bc504] ease-in-out duration-300 text-xl pt-3 pb-4 px-8 inline">
            Enter Presale
          </button>
        </div>
      </div>
    </div>
  );
};
export default Main;
