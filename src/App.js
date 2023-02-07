import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { ethers } from "ethers";
import OurSpecialty from "./components/OurSpecialty";
import { useAccount } from "wagmi";
import AboutUs from "./components/AboutUs";
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import OurCollection from "./components/OurCollection";
import Footer from "./components/Footer";

const mintContract = "0xBA00E8CDE3DE3172910421C353196A66CA9C7F2E";

function App() {
  const chains = [mainnet];
  const { address } = useAccount();

  // Wagmi client
  const { provider } = configureChains(
    [mainnet],
    [walletConnectProvider({ projectId: "a2427e0c1e47f2fdf878366cb31eaf25" })]
  );

  const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({ appName: "JTribe", chains }),
    provider,
  });

  // Web3Modal Ethereum Client
  const ethereumClient = new EthereumClient(wagmiClient, chains);

  return (
    <WagmiConfig client={wagmiClient}>
      <Header />
      <Main />
      <OurSpecialty />
      <AboutUs />
      <OurCollection />
      <Footer />
      <Web3Modal
        projectId='1db7e84d451b8724016f1839cd914abd'
        ethereumClient={ethereumClient}
      />
    </WagmiConfig>
  );
}

export default App;
