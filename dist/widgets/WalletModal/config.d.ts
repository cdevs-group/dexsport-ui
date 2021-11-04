import { Config } from "./types";
export declare const connectorsDefault: Config[];
export declare const connectorsAvalanche: Config[];
export declare const connectorLocalStorageKey = "connectorId";
export declare const getNetwork: (network?: string | undefined) => Config[];
