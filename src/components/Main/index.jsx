import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";
import chest from "../../assets//chest.png";
import rich from "../../assets/rich.png";
import poor from "../../assets/poor.png";
import { ethers } from "ethers";

import busdAbi from "../../contracts/busd.json";
import presaleAbi from "../../contracts/presale.json";

const busdAddress = "0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7";
const presaleAddress = "0x1374d424b8b45d6E5F57a7Ba640a309eBF709c2A";

const Main = () => {
  const { userAddress, netWork, signer } = useContext(AppContext);
  console.log(presaleAbi);

  const buyPresale = async () => {
    const busdContract = new ethers.Contract(busdAddress, busdAbi, signer);
    const presaleContract = new ethers.Contract(
      presaleAddress,
      presaleAbi,
      signer
    );

    try {
      const tnx = await busdContract.approve(
        presaleAddress,
        "10000000000000000000"
      );
      await tnx.wait();
      const tnx2 = await presaleContract.buyPresaleSlot();
      await tnx2.wait();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
    // buy
  };

  return (
    <div className="w-full py-10 sm:py-20 flex justify-center items-center">
      <div className="max-w-screen-2xl relative w-full mx-5 grid place-content-center">
        <div className="bg-[#0399FC] rounded-2xl text-white p-8 text-center h-72 max-w-sm mx-auto">
          <p className="text-lg font-Carter">
            Vesting, Shells, Eggs, Incubations, Rewards & the best mascot since
            Mickey Mouse. $FRED 🐢 will lead the first ever Partner Progression
            Platform on BNB Chain!
          </p>
        </div>
        <div className="py-8 bg-[#7BDCFE] px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
          <h2 className="font-Carter text-[#075424] text-2xl mb-6 capitalize">
            fred the turtle
          </h2>
          <img
            className="w-24 h-24 rounded-full mx-auto"
            src={chest}
            alt="User avatar"
          />
          <span className="flex font-Francois mt-5 items-center rounded-full w-24  justify-center mx-auto">
            $FRED 🐢
          </span>
          <span className="flex font-Francois items-center rounded-full w-24  justify-center mx-auto mt-2 mb-2">
            #FTT 💚
          </span>
          <button
            onClick={buyPresale}
            className="rounded-md font-Francois text-[#075424] bg-[#b8e220] hover:bg-[#9bc504] ease-in-out duration-300 text-xl pt-3 pb-4 px-8 inline"
          >
            Enter Presale
          </button>
        </div>

        <img
          src={poor}
          alt=""
          className="hidden lg:flex absolute top-[15%] left-0"
        />
        <img
          src={rich}
          alt=""
          className="hidden lg:flex absolute top-[15%] right-0"
        />
      </div>
    </div>
  );
};
export default Main;
