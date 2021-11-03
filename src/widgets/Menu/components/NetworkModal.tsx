import React from "react";
import styled from "styled-components";
import { transparentize } from "polished";
import { Link } from "../../../components/Link";
import { Text } from "../../../components/Text";
import { Modal } from "../../Modal";
import { BlockChainNetwork } from "../types";

interface Props {
  title?: string;
  linkText?: string;
  linkHref?: string;
  handleToggleNetwork?: (e: any) => void;
  onDismiss?: () => void;
  valuesNetworks?: string[];
  listNetwork?: BlockChainNetwork[];
}

const Wrap = styled.div`
  padding: 0 20px 26px;
`;

const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 10px;
  border-radius: 12px;
  background: ${({ theme }) => transparentize(0.85, theme.colors.primary)};
  cursor: pointer;
  border: none;
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 14px;
  margin: 40px 0;
`;
const TextStyled = styled(Text)`
  flex-grow: 1;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-align: center;
`;

const NetworkModal: React.FC<Props> = ({
  title,
  linkText,
  linkHref,
  handleToggleNetwork = (e) => null,
  onDismiss = () => null,
  valuesNetworks,
  listNetwork,
}) => {
  const handleClick = (e: any) => {
    handleToggleNetwork(e.currentTarget.value);
    onDismiss();
  };

  return (
    <Modal title={title} welcome paddingTopHeader="20px" onDismiss={onDismiss}>
      <Wrap>
        <Buttons>
          {listNetwork?.map((el, i) => (
            <>
              <Button value={valuesNetworks?.[i] || el.chainId} onClick={handleClick}>
                <TextStyled>{el.name}</TextStyled>
                <img src={el.icon} alt="" />
              </Button>
            </>
          ))}
        </Buttons>
        <Link href={linkHref} style={{ margin: "0 auto" }}>
          {linkText}
        </Link>
      </Wrap>
    </Modal>
  );
};

export default NetworkModal;
