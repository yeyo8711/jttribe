import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Stats from "./components/Stats";
import TokenInfo from "./components/TokenInfo";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "./context/appContext";
import presaleAbi from "./contracts/presale.json";
import { ethers } from "ethers";
import Banner1 from "./components/Banner1";
import Banner2 from "./components/Banner2";

const presaleAddress = "0x6D7bd7D120c4BC3d8480d0ac29F337d35E6C5996";

function App() {
  const { userAddress, signer } = useContext(AppContext); // no auto-completion?
  const [bought, setBought] = useState(false);
  const [spots, setSpots] = useState(150);

  const staticProvider = new ethers.providers.JsonRpcProvider(
    "https://rpc.ankr.com/bsc"
  );

  const readContract = new ethers.Contract(
    presaleAddress,
    presaleAbi,
    staticProvider
  );

  const presaleContract = new ethers.Contract(
    presaleAddress,
    presaleAbi,
    signer
  );

  const getInfo = async () => {
    const buyBool = await presaleContract.hasPurchased(userAddress);
    setBought(buyBool);
  };

  const getSlots = async () => {
    const slots = await readContract.presaleSpots();
    const slots1 = await readContract.whitelListSpots();
    const totalSpots =
      Number(ethers.utils.formatUnits(slots, 0)) +
      Number(ethers.utils.formatUnits(slots1, 0));

    setSpots(totalSpots);
  };

  useEffect(() => {
    getInfo();
    getSlots();
  });

  return (
    <>
      <Header />
      {bought ? (
        <React.Fragment>
          <Banner2 />
          <TokenInfo />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Banner1 spots={spots} />
          <Main />
        </React.Fragment>
      )}
      <Stats />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
