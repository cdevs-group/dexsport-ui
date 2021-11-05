import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Text from "../../../components/Text/Text";
import { LinkHeaderProps } from "../types";

const MenuLink = ({ name, url, size, onClick }: LinkHeaderProps) => {
  const isHttpLink = url?.startsWith("http");
  const Item = () => <LinkItem size={size}>{name}</LinkItem>;

  return (
    <>
      {isHttpLink && (
        <a href={url} target="_blank">
          <Item />
        </a>
      )}
      {!isHttpLink && (
        <StyledLink exact onClick={onClick} to={url}>
          <Item />
        </StyledLink>
      )}
    </>
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
  margin: 37px 0 0;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    background: hsla(0, 0%, 100%, 0.1);
  }
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0;
    padding: 30px 25px;
  }
`;
