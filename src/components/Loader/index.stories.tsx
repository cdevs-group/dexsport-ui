import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import Loader from "./Loader";
import { LoaderSmall } from ".";

export default {
  title: "Components/Loader",
  component: Loader,
  argTypes: {},
} as Meta;

export const Default: React.FC = () => {
  return (
    <>
      <div>
        <Loader />
      </div>
      <div>
        <LoaderSmall />
      </div>
    </>
  );
};
