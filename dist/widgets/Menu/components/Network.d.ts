import React from "react";
import { BlockChainNetwork } from "../types";
interface Props {
    network?: BlockChainNetwork;
    titleNetwork?: string;
    linkTextNetwork?: string;
    linkHrefNetwork?: string;
    handleToggleNetwork?: (e: any) => void;
    valuesNetworks?: string[];
    listNetwork?: BlockChainNetwork[];
}
declare const Network: React.FC<Props>;
export default Network;
