import React from "react";
import "./index.css";
import { Web3Button } from "@web3modal/react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Squash } from "hamburger-react";

import { useAccount } from "wagmi";
import { useState } from "react";

const Header = () => {
  const { address, isConnected } = useAccount();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='header-main'>
      <div className='header-title roll-in-left '>
        <h1>JT-Tribe</h1>
      </div>
      <div className='burger'>
        <Squash
          onToggle={() => setIsMenuOpen(!isMenuOpen)}
          className='burger'
        />
      </div>
      <div className='header-sections'>
        <AnchorLink href='#home' className='header-sections-link'>
          <h1 className='header-sections-link'>Home</h1>
        </AnchorLink>
        <AnchorLink href='#jtt' className='header-sections-link'>
          <h1 className='header-sections-link'>JTT</h1>
        </AnchorLink>
        <AnchorLink href='#about' className='header-sections-link'>
          <h1>About</h1>
        </AnchorLink>
        <AnchorLink href='#collection' className='header-sections-link'>
          <h1>Collection</h1>
        </AnchorLink>
      </div>
      <div className={`${isMenuOpen ? "header-sections-small" : "notvisible"}`}>
        <AnchorLink href='#home' className='header-sections-link'>
          <h1 className='header-sections-link'>Home</h1>
        </AnchorLink>
        <AnchorLink href='#jtt' className='header-sections-link'>
          <h1 className='header-sections-link'>JTT</h1>
        </AnchorLink>
        <AnchorLink href='#about' className='header-sections-link'>
          <h1>About</h1>
        </AnchorLink>
        <AnchorLink href='#collection' className='header-sections-link'>
          <h1>Collection</h1>
        </AnchorLink>
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
