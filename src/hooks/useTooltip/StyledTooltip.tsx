import styled from "styled-components";

export const Arrow = styled.div`
  &,
  &::before {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    z-index: -1;
  }
  &::before {
    content: "";
    transform: rotate(45deg);
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const StyledTooltip = styled.div`
  padding: 16px;
  font-size: 16px;
  line-height: 130%;
  border-radius: 16px;
  max-width: 320px;
  z-index: 101;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.colors.boxShadow};
  &[data-popper-placement^="top"] > ${Arrow} {
    bottom: -4px;
  }
  &[data-popper-placement^="bottom"] > ${Arrow} {
    top: -4px;
  }
  &[data-popper-placement^="left"] > ${Arrow} {
    right: -4px;
  }
  &[data-popper-placement^="right"] > ${Arrow} {
    left: -4px;
  }
`;
