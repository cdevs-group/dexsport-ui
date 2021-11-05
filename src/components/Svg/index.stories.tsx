import React from "react";
import { WalletIcon, CopyIcon2, CloseIcon, DisconnectIcon } from ".";

export default {
  title: "Components/Svg",
  component: [CloseIcon, WalletIcon, DisconnectIcon, CopyIcon2],
  argTypes: {},
};

export const Default: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: 20 }}>
          <CloseIcon />
        </div>
        <div style={{ marginRight: 20 }}>
          <CopyIcon2 />
        </div>
        <div style={{ marginRight: 20 }}>
          <WalletIcon />
        </div>
        <div style={{ marginRight: 20 }}>
          <DisconnectIcon />
        </div>
      </div>
    </div>
  );
};
