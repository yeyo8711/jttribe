import React from "react";
import "./index.css";
import { Web3Button } from "@web3modal/react";

import { useAccount } from "wagmi";

const Header = () => {
  const { address, isConnected } = useAccount();

  return (
    <header className='header-main'>
      <div className='header-title roll-in-left '>
        <h1>JT-Tribe</h1>
      </div>
      <div className='header-sections'>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>Roadmap</h1>
        <h1>Artist</h1>
        <h1>Team</h1>
      </div>
      <div className='header-button'>
        {isConnected ? (
          <div className='wallet'>
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
