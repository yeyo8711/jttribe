import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import fred from "../../assets/swimming.png";
import { AppContext } from "../../context/appContext";
import presaleAbi from "../../contracts/presale.json";

const TokenInfo = () => {
  const { userAddress, signer } = useContext(AppContext);
  const presaleAddress = "0x6D7bd7D120c4BC3d8480d0ac29F337d35E6C5996";

  const [availableTokens, setAvailableTokens] = useState(0);
  const [balance, setBalance] = useState(0);

  const presaleContract = new ethers.Contract(
    presaleAddress,
    presaleAbi,
    signer
  );

  useEffect(() => {
    getAvailableTokens();
    getUserBalance();
  });

  const getAvailableTokens = async () => {
    const presaleContract = new ethers.Contract(
      presaleAddress,
      presaleAbi,
      signer
    );

    const available = await presaleContract.checkAvailableTokens();
    console.log(ethers.utils.formatUnits(available, 0));
    setAvailableTokens(ethers.utils.formatUnits(available, 0));
  };

  const getUserBalance = async () => {
    const presaleContract = new ethers.Contract(
      presaleAddress,
      presaleAbi,
      signer
    );

    const available = await presaleContract.vestingRegistry(userAddress);
    console.log(ethers.utils.formatEther(available._amount, 0));
    setBalance(ethers.utils.formatEther(available._amount));
  };

  const claimTokens = async () => {
    console.log("claim");

    const presaleContract = new ethers.Contract(
      presaleAddress,
      presaleAbi,
      signer
    );

    const available = await presaleContract.presaleSpots();
    console.log(ethers.utils.formatUnits(available, 0));
    try {
      const tnx2 = await presaleContract.claimTokens();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full py-10 sm:py-20 flex justify-center min-h-[70vh]">
      <div className="max-w-screen-2xl w-full flex justify-center items-center">
        <div className="block rounded-lg shadow-lg bg-[#91af25] text-center">
          <div className="py-3 px-6 border-b bg-[#12883f] text-white rounded-tl-lg rounded-tr-lg font-Carter text-[#075424]' border-gray-300">
            Your $FRED Balance: <br /> {balance}
          </div>
          <div className="p-6">
            <div className="w-72 sm:w-[400px] mb-5 rounded-xl">
              <img src={fred} alt="" />
            </div>

            <button
              onClick={claimTokens}
              type="button"
              className=" inline-block font-Carter px-6 py-2.5 text-[#075424] bg-[#b8e220] hover:bg-[#c8ee3e] font-medium text-xs leading-tight uppercase rounded shadow-md  focus:outline-none focus:ring-0 active:bg-[#779706] active:shadow-lg transition duration-150 ease-in-out"
            >
              Claim Tokens
            </button>
          </div>
          <div className="py-3 flex justify-center items-center px-6 border-t bg-[#f7f7f7] boder-rounde font-Francois border-gray-300 text-gray-600 rounded-bl-lg rounded-br-lg">
            Available to claim:{" "}
            <p className="text-[#075424] font-semibold ml-3">
              {availableTokens}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenInfo;
