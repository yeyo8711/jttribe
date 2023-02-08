import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useSigner } from "wagmi";
import "./main.css";
import abi from "../../contracts/abi.json";
import { useAccount } from "wagmi";
import whitelist from "../../constants/whitelist.json";

const Main = () => {
  const { data: signer } = useSigner();
  const [mintAmount, setMintAmount] = useState(1);
  const [proofAddress, setProofAddress] = useState(null);
  const { address } = useAccount();
  const userAddress = address;

  // Contract interactions

  const mintContract = "0xBA00E8CDE3DE3172910421C353196A66CA9C7F2E";

  const mint = async () => {
    if (!signer || !userAddress) return;

    const contract = new ethers.Contract(mintContract, abi, signer);
    const presalePrice = await contract.getTotalEarlyPrice();

    const value = (
      ethers.utils.formatEther(presalePrice) * Number(mintAmount)
    ).toString();

    setProofAddress(whitelist.proofs[userAddress].proof);

    await contract.mintEarlySale(mintAmount, proofAddress, {
      value: ethers.utils.parseEther(value),
    });
  };

  const handleAmountChange = (change) => {
    if (change === -1) {
      if (mintAmount < 2) return;
      setMintAmount(mintAmount - 1);
    } else if (change === +1) setMintAmount(mintAmount + 1);
  };

  return (
    <div className='main' id='home'>
      <div className='main-title'>
        <h1 className='main-title-top tracking-in-expand-fwd '>
          Just Travelers Tribe
        </h1>
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
        <button className='mint-button vibrate-1' onClick={mint}>
          Mint
        </button>
      </div>
    </div>
  );
};
export default Main;
