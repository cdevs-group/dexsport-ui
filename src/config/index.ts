import BigNumber from "bignumber.js/bignumber";
import { BIG_TEN } from "../helpers/bigNumber";

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});

export const BSC_BLOCK_TIME = 3;

export const CAKE_PER_BLOCK = new BigNumber(40);
export const BLOCKS_PER_YEAR = new BigNumber((60 / BSC_BLOCK_TIME) * 60 * 24 * 365); // 10512000
export const CAKE_PER_YEAR = CAKE_PER_BLOCK.times(BLOCKS_PER_YEAR);
export const BASE_URL = "https://pancakeswap.finance";
export const BASE_EXCHANGE_URL = "https://exchange.pancakeswap.finance";
export const BASE_ADD_LIQUIDITY_URL = `${BASE_EXCHANGE_URL}/#/add`;
export const BASE_LIQUIDITY_POOL_URL = `${BASE_EXCHANGE_URL}/#/pool`;
export const BASE_BSC_SCAN_URL = "https://bscscan.com";
export const BASE_AVAX_SCAN_URL = "https://cchain.explorer.avax.network";
export const BSC_RPC = "https://bsc-dataseed.binance.org/";
export const AVAX_RPC = "https://api.avax.network/ext/bc/C/rpc";
export const LOTTERY_MAX_NUMBER_OF_TICKETS = 50;
export const LOTTERY_TICKET_PRICE = 1;
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18);
export const DEFAULT_GAS_LIMIT = 200000;
export const DEFAULT_GAS_PRICE = 5;
export const TESTNET_CHAIN_ID = "97";
export const MAINNET_CHAIN_ID = "56";

export const TESTNET_BSC_CHAIN_ID = "97";
export const MAINNET_BSC_CHAIN_ID = "56";
export const MAINNET_AVAX_CHAIN_ID = "43114";
export const TESTNET_AVAX_CHAIN_ID = "43113";

export const NETWORK_AVAX = "avax";
export const NETWORK_BSC = "bsc";

export type BlockChainNetwork = {
  name: string;
  chainId: string;
  shortName: string;
  chainName: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls: string[];
  blockExplorerUrls: string[];
  icon: string;
};

export const NETWORK_CHAIN: BlockChainNetwork[] = [
  {
    name: "Binance",
    chainId: "56",
    chainName: "Binance Smart Chain Mainnet",
    shortName: "bsc",
    nativeCurrency: {
      name: "BNB",
      symbol: "bnb",
      decimals: 18,
    },
    rpcUrls: [
      "https://bsc-dataseed1.ninicoin.io",
      "https://bsc-dataseed1.defibit.io",
      "https://bsc-dataseed.binance.org",
    ],
    blockExplorerUrls: ["https://bscscan.com"],
    icon: "/images/bnb.png",
  },
  {
    name: "AVAX",
    chainId: "43114",
    chainName: "AVAX Mainnet",
    shortName: "avax",
    nativeCurrency: {
      name: "AVAX",
      symbol: "avax",
      decimals: 18,
    },
    rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
    blockExplorerUrls: ["https://cchain.explorer.avax.network/"],
    icon: "/images/avalanche.png",
  },
];
