import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ContextProvider from "./context/appContext";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { Web3Modal } from "@web3modal/react";
import { modalConnectors, walletConnectProvider } from "@web3modal/ethereum";
import { bsc } from "wagmi/chains";
import { EthereumClient } from "@web3modal/ethereum";

const chains = [bsc];

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WagmiConfig client={wagmiClient}>
      <ContextProvider>
        <App />
      </ContextProvider>
      <Web3Modal
        projectId="a2427e0c1e47f2fdf878366cb31eaf25"
        ethereumClient={ethereumClient}
      />
    </WagmiConfig>
  </React.StrictMode>
);
