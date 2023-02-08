import React, { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

import OurSpecialty from "./components/OurSpecialty";
//import { useAccount } from "wagmi";
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
import { switchNetwork } from "./utils";

function App() {
  const chains = [mainnet];
  //const { address } = useAccount();

  useEffect(() => {
    window.ethereum.on("chainChanged", (chainId) => {
      if (chainId !== "0x1") {
        alert("Please make sure your are on the right network");
        switchNetwork();
      }
    });
  }, []);

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
    <div className='App'>
      <WagmiConfig client={wagmiClient}>
        <Header />
        <Main />
        <OurSpecialty />
        <AboutUs />
        <OurCollection />
        <Footer />
        <div className='modal'>
          <Web3Modal
            projectId='1db7e84d451b8724016f1839cd914abd'
            ethereumClient={ethereumClient}
          />
        </div>
      </WagmiConfig>{" "}
    </div>
  );
}

export default App;
