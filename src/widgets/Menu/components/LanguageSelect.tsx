import React from "react";
import styled from "styled-components";
import Text from "../../../components/Text/Text";

const LanguageSelect: React.FC<any> = ({ currentLang }) => {
  return (
    <Button>
      <ButtonText>{currentLang}</ButtonText>
    </Button>
  );
};

export default LanguageSelect;

const Button = styled.button`
  margin-right: 21px;
  padding: 0;
  background: ${({ theme }) => theme.colors.dark};
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;

const ButtonText = styled(Text)`
  padding: 13px 11px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.08em;
`;
