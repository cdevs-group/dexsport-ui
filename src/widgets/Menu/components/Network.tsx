import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import { useModal } from "../../Modal";
import NetworkModal from "./NetworkModal";
import { BNB2 } from "../../../constants/images";
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

const Network: React.FC<Props> = ({
  network,
  handleToggleNetwork,
  linkTextNetwork,
  linkHrefNetwork,
  titleNetwork,
  valuesNetworks,
  listNetwork,
}) => {
  const [onPresentConnectModal] = useModal(
    <NetworkModal
      title={titleNetwork}
      linkHref={linkHrefNetwork}
      linkText={linkTextNetwork}
      handleToggleNetwork={handleToggleNetwork}
      valuesNetworks={valuesNetworks}
      listNetwork={listNetwork}
    />
  );

  return (
    <NetworkBlock
      as="button"
      onClick={() => {
        onPresentConnectModal();
      }}
    >
      <TextStyled>{network?.name || "Binance"}</TextStyled>
      <AvatarNetwork>
        <img src={network?.icon || BNB2} />
      </AvatarNetwork>
    </NetworkBlock>
  );
};

const NetworkBlock = styled.button`
  position: relative;
  display: flex;
  min-height: 30px;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
  padding: 0 2px;
  font-size: 11px;
  line-height: 14px;
  background: ${({ theme }) => theme.colors.dark};
  border-radius: 7px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  &.notAuth {
    background: ${({ theme }) => theme.colors.primary};
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    min-height: 40px;
    margin-right: 11px;
    font-size: 15px;
    line-height: 19px;
    border-radius: 12px;
  }
`;

const TextStyled = styled(Text)`
  display: none;

  ${({ theme }) => theme.mediaQueries.lg} {
    display: block;
    padding: 0 17px;
    flex-grow: 1;
    text-align: center;
  }
`;

const AvatarNetwork = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    width: 26px;
    height: 26px;
  }
  &.notAuth {
    width: calc(100% - 4px);
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    margin-right: 2px;
    & img {
      width: 32px;
      height: 32px;
    }
  }
`;

export default Network;
