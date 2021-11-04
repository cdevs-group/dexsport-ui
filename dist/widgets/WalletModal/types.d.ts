export declare enum ConnectorNames {
    Injected = "injected",
    WalletConnect = "walletconnect",
    BSC = "bsc",
    Coin98 = "coin98"
}
export declare type Login = (connectorId: ConnectorNames) => void;
export interface Config {
    title: string;
    icon: string;
    connectorId: ConnectorNames;
}
