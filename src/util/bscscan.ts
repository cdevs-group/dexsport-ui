import { BASE_BSC_SCAN_URL, BASE_AVAX_SCAN_URL, MAINNET_BSC_CHAIN_ID, MAINNET_AVAX_CHAIN_ID } from "../config";
import { getChainIdByName } from "./network";

export const getBscScanTransactionUrl = (transactionHash?: string, network?: string) => {
  const idNetwork = getChainIdByName(network);

  if (idNetwork === MAINNET_BSC_CHAIN_ID) {
    return `${BASE_BSC_SCAN_URL}/tx/${transactionHash}`;
  }
  if (idNetwork === MAINNET_AVAX_CHAIN_ID) {
    return `${BASE_AVAX_SCAN_URL}/tx/${transactionHash}`;
  }
  return `${BASE_BSC_SCAN_URL}/tx/${transactionHash}`;
};
