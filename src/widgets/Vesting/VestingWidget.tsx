import React from "react";
import styled from "styled-components";
import CardIndicator from "./CardIndicator";
import CardTimer from "./CardTimer";
import ClaimTokens from "./ClaimTokens";
import TakeGift from "./TakeGift";
import { VestingWidgetProps } from "./types";
import TokenOnPoolz from "./TokenOnPoolz";

const VestingWidget: React.FC<VestingWidgetProps> = ({
  dataClaimTokens,
  textsClaimTokens,
  handleClaimTokens,
  dataCardsIndicators,
  textsTakeGift,
  handleTakeGift,
  claimedGift,
  imagesGift,
  imagesMarketplace,
  dataTimer,
  canClaim,
  textsPoolz,
  linkClaimTokens,
  disabledButtonClaimTokens,
  isLoadingButtonClaimTokens,
  disabledTopCards,
  disabledCardClaimTokens,
  giftLoader,
}) => {
  return (
    <Wrapper>
      <CardIndicator
        canClaim={canClaim}
        disabledTopCards={disabledTopCards}
        data={dataCardsIndicators[0]}
        id="CardIndicator-1"
      />
      <CardIndicator
        canClaim={canClaim}
        disabledTopCards={disabledTopCards}
        data={dataCardsIndicators[1]}
        id="CardIndicator-2"
      />
      <CardTimer canClaim={canClaim} disabledTopCards={disabledTopCards} data={dataTimer} />
      <CardIndicator
        canClaim={canClaim}
        disabledTopCards={disabledTopCards}
        data={dataCardsIndicators[2]}
        id="CardIndicator-3"
      />
      {!canClaim ? (
        <TokenOnPoolz
          texts={textsPoolz}
          images={imagesMarketplace}
          linkClaimTokens={linkClaimTokens}
          disabledCardClaimTokens={disabledCardClaimTokens}
        />
      ) : (
        <ClaimTokens
          data={dataClaimTokens}
          texts={textsClaimTokens}
          handleClaimTokens={handleClaimTokens}
          disabledButton={disabledButtonClaimTokens}
          isLoading={isLoadingButtonClaimTokens}
          disabledCardClaimTokens={disabledCardClaimTokens}
        />
      )}
      <TakeGift
        giftLoader={giftLoader}
        texts={textsTakeGift}
        handleTakeGift={handleTakeGift}
        claimedGift={claimedGift}
        images={imagesGift}
      />
    </Wrapper>
  );
};

export default VestingWidget;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 30px 20px;
  ${({ theme }) => theme.mediaQueries.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
