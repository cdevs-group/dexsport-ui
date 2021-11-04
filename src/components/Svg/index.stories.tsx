import React from "react";
import { WalletIcon, CopyIcon, CloseIcon, DisconnectIcon } from ".";

export default {
  title: "Components/Svg",
  component: [CloseIcon, WalletIcon, DisconnectIcon, CopyIcon],
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
          <CopyIcon />
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
