import React, { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";

import { shortAddress } from "../../utils";
import { AppContext } from "../../context/appContext";

const Header = () => {
  const [shortUserAddress, setShortUserAddress] = useState();
  const { userAddress, setUserAddress, setSigner } = useContext(AppContext); // no auto-completion?

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
    <div className='flex justify-end h-14 w-full p-3 text-black bg-gray-400'>
      <button
        onClick={connectWallet}
        className='p-2 flex justify-center items-center bg-blue-400'>
        {userAddress !== null ? shortUserAddress : "Connect Wallet"}
      </button>
      <script src='https://unpkg.com/@themesberg/flowbite@1.1.0/dist/flowbite.bundle.js'></script>
    </div>
  );
};
export default Header;
