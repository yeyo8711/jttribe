import React from "react";

import FTTProfile from "../../assets/logo.png";

import { Web3Button } from "@web3modal/react";

import { useAccount } from "wagmi";

const Header = () => {
  const { address, isConnected } = useAccount();

  return (
    <header className="w-full flex justify-center text-white bg-[#025522]">
      <div className="max-w-screen-xl text-white flex justify-between items-center w-full p-3">
        <h1 className="text-2xl flex justify-center gap-3 items-center font-Carter ">
          <img
            className="w-12 h-12 object-cover rounded-full mx-auto shadow-lg"
            src={FTTProfile}
            alt="User avatar"
          />
          <h2 className="flex sm:hidden">FTT</h2>
          <h2 className="hidden sm:flex">Fred The Turtle</h2>
        </h1>
        {isConnected ? (
          <div className="border-2 border-[#55c3ea] hover:bg-[#569db7] transition-all ease-in-out dua rounded-lg px-3 py-2 text-[#025522] cursor-pointer bg-[#7BDCFE]">
            {address.slice(0, 4) + " . . . " + address.slice(-4)}
          </div>
        ) : (
          <Web3Button />
        )}
      </div>
    </header>
  );
};
export default Header;
