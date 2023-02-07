import React, { useState } from "react";
import { ethers } from "ethers";
import { useSigner } from "wagmi";
import "./main.css";
import PresalePicture from "../../assets/presale.jpeg";

const Main = () => {
  const { data: signer } = useSigner();
  const [mintAmount, setMintAmount] = useState(1);

  const handleAmountChange = (change) => {
    if (change === -1) {
      if (mintAmount < 2) return;
      setMintAmount(mintAmount - 1);
    } else if (change === +1) setMintAmount(mintAmount + 1);
  };

  return (
    <div className='main'>
      <div className='main-title'>
        <h1 className='main-title-top'>Just Travelers Tribe</h1>
        <h1 className='main-title-bottom'>
          Enjoy conscious world-wide traveling services and luxury experiences
          at the best rates while being an agent of change contributing to the
          ecosystems preservation.
        </h1>
      </div>
      <div className='main-mint'>
        <h1>Mint early presale NFT for only $55 USD</h1>
        <div className='main-mint-buttons'>
          <button
            className='mint-amount-button'
            onClick={() => handleAmountChange(-1)}>
            -
          </button>
          <div className='main-mint-amount'>{mintAmount}</div>
          <button
            className='mint-amount-button'
            onClick={() => handleAmountChange(+1)}>
            +
          </button>
        </div>
        <button className='mint-button'>Mint</button>
      </div>
    </div>
  );
};
export default Main;
