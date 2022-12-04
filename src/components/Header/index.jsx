import React, { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import FTTProfile from "../../assets/FFTProfile.png";

import { shortAddress } from "../../utils";
import { AppContext } from "../../context/appContext";
import { toast, ToastContainer } from "react-toastify";

const Header = () => {
  const [shortUserAddress, setShortUserAddress] = useState();
  const { userAddress, setUserAddress, setSigner } = useContext(AppContext); // no auto-completion?

  const notify = () => toast("Wow so easy!");

  useEffect(() => {
    if (window.ethereum === undefined) return;
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    /**Get account on page load */
    const getAccounts = async () => {
      try {
        const accounts = await provider.listAccounts();
        if (accounts[0] === undefined) return;
        setUserAddress(accounts[0]);
        const signer = provider.getSigner();
        setSigner(signer);

        console.log("header getaccounts signer =>", signer);
        setShortUserAddress(shortAddress(accounts[0]));
      } catch (error) {
        console.log("get accounts failed");
      }
    };
    getAccounts();

    /**Get the new account when the user changes */
    window.ethereum.on("accountsChanged", handleAccountsChanged);
    function handleAccountsChanged(accounts) {
      if (accounts.length === 0) {
        console.log("This account is not connected");
      } else if (accounts[0] !== userAddress) {
        setUserAddress(accounts[0]);
        console.log("accounts changed", accounts[0]);
        setShortUserAddress(shortAddress(accounts[0]));

        const signer = provider.getSigner();
        console.log("header getaccounts signer =>", signer);
      }
    }
  }, []);

  const connectWallet = async () => {
    if (!window.ethereum) return console.log("install metamask!");

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    try {
      const accounts = await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      console.log("header signer", signer);
      setUserAddress(accounts[0]);
    } catch (error) {
      window.alert("wallet connection denied");
    }
  };

  return (
    <header className="w-full flex justify-center text-white bg-[#025522]">
      <div className="max-w-screen-xl text-white flex justify-between items-center w-full p-3">
        <h1
          className="text-2xl flex justify-center gap-3 items-center font-Carter "
          onClick={notify}
        >
          <img
            class="w-12 h-12 object-cover rounded-full mx-auto shadow-lg"
            src={FTTProfile}
            alt="User avatar"
          />
          <h2 className="flex sm:hidden">FTT</h2>
          <h2 className="hidden sm:flex">Fred The Turtle</h2>
        </h1>

        <button
          onClick={connectWallet}
          className="border-2 border-[#55c3ea] hover:bg-[#569db7] transition-all ease-in-out dua rounded-lg px-3 py-2 text-[#025522] cursor-pointer bg-[#7BDCFE]"
        >
          {userAddress !== null ? shortUserAddress : "Connect Wallet"}
        </button>
      </div>
    </header>
  );
};
export default Header;
