import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import { LinkHeaderProps } from "../types";

const MenuLink = ({ name, url, size, onClick }: LinkHeaderProps) => {
  const isHttpLink = url?.startsWith("http");
  const Link: any = isHttpLink ? "a" : StyledLink;
  const props = isHttpLink ? { href: url } : { to: url };

  return (
    <Link {...props} exact onClick={onClick}>
      <LinkItem size={size}>{name}</LinkItem>
    </Link>
  );
};

export default MenuLink;

const StyledLink = styled(NavLink)``;
const LinkItem = styled(Text)`
  position: relative;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.lightGrey};
  margin: 0 0 20px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    &::after {
      display: block;
      bottom: -30px;
      width: 0;
      height: 2px;
      content: "";
      position: absolute;
      background: #4be43e;
      transition: all.3s;
      opacity: 0;
    }
    margin: 0 20px;
    ${StyledLink}.active & {
      &::after {
        width: 100%;
        opacity: 1;
      }
    }
  }
  ${({ theme }) => theme.mediaQueries.xl} {
    margin: 0 50px;
  }
`;
