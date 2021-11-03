import React from "react";
import styled from "styled-components";
import { BaseLayout } from ".";
import { BG, } from "../../constants/images";
import { Text } from "../Text";

export default {
  title: "Components/Layouts",
  argTypes: {},
};

const Wrap = styled.div`
  width: 100%;
  background: #fff;
  padding: 30px;
`;

export const Base: React.FC = () => (
  <Wrap>
    <BaseLayout src={BG}>
      <Text color="text">Layout Base</Text>
    </BaseLayout>
  </Wrap>
);
