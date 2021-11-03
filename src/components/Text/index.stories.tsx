import React from "react";
import Text from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    bold: {
      name: "bold",
      table: {
        type: { summary: "bool", detail: "Bold the text" },
        defaultValue: { summary: false },
      },
      control: {
        type: null,
      },
    },
    fontSize: {
      name: "fontSize",
      table: {
        type: { summary: "string", detail: "Fontsize in px or em" },
        defaultValue: { summary: "16px" },
      },
      control: {
        type: null,
      },
    },
    color: {
      name: "color",
      table: {
        type: { summary: "string", detail: "Color from the theme, or CSS color" },
        defaultValue: { summary: "theme.colors.text" },
      },
      control: {
        type: null,
      },
    },
  },
};

export const Default: React.FC = () => {
  return (
    <div>
      <Text bold size="xl">
        Medium 24
      </Text>
      <Text bold size="lg">
        Medium 21
      </Text>
      <Text bold size="md">
        Medium 15
      </Text>
      <Text bold size="sm">
        Medium 13
      </Text>
      <Text size="sm">Regular 13</Text>
      <Text size="xs">Regular 11</Text>
    </div>
  );
};
