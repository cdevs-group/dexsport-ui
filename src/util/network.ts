import { NETWORK_CHAIN } from "../config";

export const getChainIdByName = (name?: string) => {
  const id = NETWORK_CHAIN.find((el) => el.shortName === name)?.chainId;
  if (id) return id;
  return null;
};
