import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import { DropDownProps } from "./types";

const DropdownLayout = ({ children, open, setOpen, icon }: DropDownProps) => {
  const refSelect = useRef<any>(null);

  const handleClickOutside = useCallback(
    (e) => {
      if (refSelect.current !== e.target && refSelect.current && !refSelect.current.contains(e.target)) {
        setOpen(false);
      }
    },
    [setOpen]
  );

  useEffect(() => {
    if (document && refSelect && refSelect.current) {
      document.addEventListener("mouseup", handleClickOutside, false);
    }
    return () => {
      document.removeEventListener("mouseup", handleClickOutside, false);
    };
  }, [refSelect, handleClickOutside]);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <Block ref={refSelect}>
      <Button onClick={handleClickOpen}>{icon}</Button>
      <Dropdown className={open ? "open" : ""}>{children}</Dropdown>
    </Block>
  );
};

export default DropdownLayout;

const Block = styled.div`
  position: relative;
`;
const Button = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  padding: 0;
`;

const Dropdown = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 18px;
  border-radius: 5px;
  transition: 0.3s;
  z-index: -1;
  opacity: 0;
  overflow-y: auto;
  pointer-events: none;
  max-height: 260px;
  &.open {
    transition: 0.3s;
    z-index: 10;
    opacity: 1;
    margin-top: 4px;
    pointer-events: all;
  }
`;
