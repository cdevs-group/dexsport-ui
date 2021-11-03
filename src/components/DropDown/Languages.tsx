import React, { useState } from "react";
import styled from "styled-components";
import { Text } from "../Text";
import DropdownLayout from "./DropDown";
import { LanguagesProps } from "./types";

const Languages = ({ currentLang, setLang, langs }: LanguagesProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleSelect = (lang: any) => {
    setLang(lang);
    setOpen(false);
  };

  return (
    <Wrap>
      <DropdownLayout
        open={open}
        setOpen={setOpen}
        icon={
          <Button open={open}>
            <ButtonText>{currentLang?.toUpperCase()}</ButtonText>
          </Button>
        }
      >
        <SelectList>
          {langs.map((lang) => (
            <Select onClick={() => handleSelect(lang)} key={lang.code}>
              {lang.code?.toUpperCase()}
            </Select>
          ))}
        </SelectList>
      </DropdownLayout>
    </Wrap>
  );
};

export default Languages;

const Wrap = styled.div`
  min-width: 40px;
`;
const SelectList = styled.div`
  padding: 12px 0;
  background: ${({ theme }) => theme.colors.bgOpacity};
  border: none;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
`;
const Select = styled.button`
  width: 100%;
  outline: none;
  margin-bottom: 7px;
  background: none;
  border: none;
  font-size: 11px;
  line-height: 14px;
  text-align: center;
  letter-spacing: 0.08em;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }
`;
const Button = styled.div<{ open: boolean }>`
  padding: 0;
  background: ${({ theme, open }) => (open ? theme.colors.buttonBg2 : theme.colors.buttonBg)};
  border: none;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  cursor: pointer;
  width: 100%;
`;

const ButtonText = styled(Text)`
  padding: 13px 6px;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.08em;
  pointer-events: none; ;
`;
