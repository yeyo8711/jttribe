import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Stats from "./components/Stats";
import TokenInfo from "./components/TokenInfo";

import presaleAbi from "./contracts/presale.json";
import { ethers } from "ethers";
import Banner1 from "./components/Banner1";
import Banner2 from "./components/Banner2";

import { useAccount } from "wagmi";

import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { bsc } from "wagmi/chains";

const presaleAddress = "0x6D7bd7D120c4BC3d8480d0ac29F337d35E6C5996";

function App() {
  const chains = [bsc];
  const { address } = useAccount();

  // Wagmi client
  const { provider } = configureChains(
    [bsc],
    [walletConnectProvider({ projectId: "a2427e0c1e47f2fdf878366cb31eaf25" })]
  );

  const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({ appName: "Fred Presale", chains }),
    provider,
  });

  // Web3Modal Ethereum Client
  const ethereumClient = new EthereumClient(wagmiClient, chains);

  const [bought, setBought] = useState(false);
  const [spots, setSpots] = useState(200);

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
    staticProvider
  );

  const getInfo = async () => {
    const buyBool = await presaleContract.hasPurchased(address);
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
    <WagmiConfig client={wagmiClient}>
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

      <Web3Modal
        projectId="a2427e0c1e47f2fdf878366cb31eaf25"
        ethereumClient={ethereumClient}
      />
    </WagmiConfig>
  );
}

export default App;
