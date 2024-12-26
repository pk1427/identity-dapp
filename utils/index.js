import { ethers } from "ethers";

import identiFi from "./IdentiFi.json";

export const contract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const { ethereum } = window;

  if (ethereum) {
    const signer = provider.getSigner();
    const contractRead = new ethers.Contract(
      "0x14468a298105be0ECB6282ac0Ef730CeA2A53133",
      identiFi.abi,
      signer
    );

    return contractRead;
  }
};
