import React from "react";
import Button from "../../components/Button/Button";
import Flex from "../../components/Box/Flex";
import useModalPlatform from "./useModalPlatform";
import ModalPlatform from "./ModalPlatform";
import { PANCAKE } from "../../constants/images";

export default {
  title: "Widgets/ModalPlatform",
  argTypes: {},
};

export const ModalPlatforms: React.FC = () => {
  const { onPresentModalPlatform } = useModalPlatform();
  return (
    <Flex>
      <Button onClick={onPresentModalPlatform}>Open welcome modal</Button>
    </Flex>
  );
};

export const PlatformOne: React.FC = () => {
  const platforms = [
    {
      link: "kjgj",
      name: "pancake",
      icon: PANCAKE,
    },
  ];
  const linkAbout = "Learn more about buy";

  return <ModalPlatform onDismiss={() => null} platforms={platforms} linkAbout={linkAbout} title="Choose platform" />;
};
