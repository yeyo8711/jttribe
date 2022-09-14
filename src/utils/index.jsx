import { ethers } from "ethers";

export const switchNetwork = async () => {
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: "0x61" }],
    });
  } catch (error) {
    if (error.code === 4902) {
      try {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x61",
              chainName: "Smart Chain - Testnet",
              nativeCurrency: {
                name: "Binance",
                symbol: "BNB", // 2-6 characters long
                decimals: 18,
              },
              blockExplorerUrls: ["https://testnet.bscscan.com"],
              rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545/"],
            },
          ],
        });
      } catch (addError) {
        console.error(addError);
      }
    }
    // console.error(e)
  }
};

/**Returns the chain ID and name. Metamask has to be installed. */
export const getChainId = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const network = await provider.getNetwork();
  return network.chainId;
};

/**Returns a short version of the user address (first 6 and last 4 characters separate by ". . .") */
export const shortAddress = (address) => {
  if (address === undefined) return;

  const shortAddress =
    address.substring(0, 6) +
    "..." +
    address.substring(address.length - 4, address.length);
  return shortAddress;
};
