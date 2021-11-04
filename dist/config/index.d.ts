import BigNumber from "bignumber.js/bignumber";
export declare const BSC_BLOCK_TIME = 3;
export declare const CAKE_PER_BLOCK: BigNumber;
export declare const BLOCKS_PER_YEAR: BigNumber;
export declare const CAKE_PER_YEAR: BigNumber;
export declare const BASE_URL = "https://pancakeswap.finance";
export declare const BASE_EXCHANGE_URL = "https://exchange.pancakeswap.finance";
export declare const BASE_ADD_LIQUIDITY_URL: string;
export declare const BASE_LIQUIDITY_POOL_URL: string;
export declare const BASE_BSC_SCAN_URL = "https://bscscan.com";
export declare const BASE_AVAX_SCAN_URL = "https://cchain.explorer.avax.network";
export declare const BSC_RPC = "https://bsc-dataseed.binance.org/";
export declare const AVAX_RPC = "https://api.avax.network/ext/bc/C/rpc";
export declare const LOTTERY_MAX_NUMBER_OF_TICKETS = 50;
export declare const LOTTERY_TICKET_PRICE = 1;
export declare const DEFAULT_TOKEN_DECIMAL: BigNumber;
export declare const DEFAULT_GAS_LIMIT = 200000;
export declare const DEFAULT_GAS_PRICE = 5;
export declare const TESTNET_CHAIN_ID = "97";
export declare const MAINNET_CHAIN_ID = "56";
export declare const TESTNET_BSC_CHAIN_ID = "97";
export declare const MAINNET_BSC_CHAIN_ID = "56";
export declare const MAINNET_AVAX_CHAIN_ID = "43114";
export declare const TESTNET_AVAX_CHAIN_ID = "43113";
export declare const NETWORK_AVAX = "avax";
export declare const NETWORK_BSC = "bsc";
export declare type BlockChainNetwork = {
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
export declare const NETWORK_CHAIN: BlockChainNetwork[];