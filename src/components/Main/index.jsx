import React, { useContext } from "react";
import { AppContext } from "../../context/appContext";
import chest from "../../assets//chest.png";
import rich from "../../assets/rich.png";
import poor from "../../assets/poor.png";
import { ethers } from "ethers";

import busdAbi from "../../contracts/busd.json";
import presaleAbi from "../../contracts/presale.json";

const busdAddress = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
const presaleAddress = "0x6D7bd7D120c4BC3d8480d0ac29F337d35E6C5996";

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
    console.log(presaleContract);

    try {
      const tnx = await busdContract.approve(
        presaleAddress,
        "110000000000000000000"
      );
      await tnx.wait();
      const tnx2 = await presaleContract.buyPresaleSlot();
      await tnx2.wait();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full py-10 sm:py-20 flex justify-center items-center">
      <div className="max-w-screen-2xl relative w-full mx-5 grid place-content-center">
        <div className="bg-[#0399FC] rounded-2xl text-white p-5 text-center h-72 max-w-sm mx-auto">
          <p className="text-lg font-Carter">
            With the decentralisation of Kickstarters, Incubations & Launchpads,
            Fred will be consistently evolving and developing the Fred-Ecosystem
            (Frecosystem) to benefit all holders, investors & partners.
          </p>
        </div>
        <div className="py-8 bg-[#7BDCFE] px-10 text-center rounded-md shadow-lg transform -translate-y-16 sm:-translate-y-24 max-w-xs mx-auto">
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
            #TurtleCoinEnthusiast
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
