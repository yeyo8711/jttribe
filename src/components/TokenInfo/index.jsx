import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { useAccount, useSigner } from "wagmi";
import fred from "../../assets/swimming.png";
import presaleAbi from "../../contracts/presale.json";

const TokenInfo = () => {
  const { address } = useAccount();
  const { data: signer } = useSigner();

  const presaleAddress = "0xB95947a52D043A739515958B8638BA36709d6C71";

  const [availableTokens, setAvailableTokens] = useState(0);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    getAvailableTokens();
    getUserBalance();
  }, []);

  const getAvailableTokens = async () => {
    const presaleContract = new ethers.Contract(
      presaleAddress,
      presaleAbi,
      signer
    );

    const available = await presaleContract.checkAvailableTokens(address);
    setAvailableTokens(
      Number(ethers.utils.formatEther(available, 0)).toFixed(2)
    );
  };

  const getUserBalance = async () => {
    const presaleContract = new ethers.Contract(
      presaleAddress,
      presaleAbi,
      signer
    );

    const available = await presaleContract.vestingRegistry(address);
    setBalance(Number(ethers.utils.formatEther(available._amount, 0)));
  };

  const claimTokens = async () => {
    const presaleContract = new ethers.Contract(
      presaleAddress,
      presaleAbi,
      signer
    );

    try {
      await presaleContract.claimTokens();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="w-full py-10 sm:py-20 flex justify-center min-h-[70vh]">
      <div className="max-w-screen-2xl w-full flex justify-center items-center">
        <div className="block rounded-lg shadow-lg bg-[#91af25] text-center">
          <div className="py-3 px-6 border-b bg-[#12883f] text-white rounded-tl-lg rounded-tr-lg font-Carter text-[#075424]' border-gray-300">
            Your vested $FRED Balance: <br /> {balance}
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
