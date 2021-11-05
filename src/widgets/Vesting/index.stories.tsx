import React from "react";
import { CercleIcon } from "../../components/Svg";
import VestingWidget from "./VestingWidget";

export default {
  title: "Widgets/VestingWidget",
  component: [VestingWidget],
};

export const VestingWidgetComponent: React.FC = () => {
  const dataClaimTokens = {
    totalRaised: "10M",
    total: "30M",
    left: "20M",
  };

  const textsClaimTokens = {
    left: "Left",
    totalRaised: "Total raised",
    total: "Total ",
    title: "You can claim tokens",
    button: "Claim tokens",
  };

  const handleClaimTokens = () => {};

  const dataCardsIndicators = [
    {
      text: "Your can claim",
      value: "2000000 $",
    },
    {
      text: "Your round",
      value: "Seed sale",
    },
    {
      text: "Total raised",
      value: "1,000,000 $",
    },
  ];

  const textsPlatform = {
    title: "Try demo",
    button: "Try demo",
  };

  const textsPoolz = {
    title: "You can claim your token on Poolz",
    description:
      "It seems, you’ve bought your tokens at Poolz Launchpad. Its not a big deal, just claim your tokens at Poolz ",
    button: "Claim tokens",
  };

  return (
    <VestingWidget
      canClaim
      dataClaimTokens={dataClaimTokens}
      textsClaimTokens={textsClaimTokens}
      handleClaimTokens={handleClaimTokens}
      dataCardsIndicators={dataCardsIndicators}
      linkPlatform="http"
      textsPlatform={textsPlatform}
      textsPoolz={textsPoolz}
      linkClaimTokens="sdfsdf"
      dataTimer={{
        textFront: "Next stage after",
        textBack: "Your vesting stage",
        textStage: "Stage 1",
        timeSecond: 30000,
        totalSeconds: 50000,
        textsTime: {
          days: "d",
          hours: "h",
          minutes: "m",
          seconds: "s",
        },
      }}
      // disabledButtonClaimTokens
      // isLoadingButtonClaimTokens
      // disabledTopCards
      // giftLoader
      // disabledCardClaimTokens
    />
  );
};
