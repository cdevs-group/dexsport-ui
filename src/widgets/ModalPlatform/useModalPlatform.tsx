import React from "react";
import { useModal } from "../Modal";
import ModalPlatform from "./ModalPlatform";
import { PANCAKE, PANGOLIN } from "../../constants/images";

interface ReturnType {
  onPresentModalPlatform: () => void;
}

const useModalPlatform = (): ReturnType => {
  const platforms = [
    {
      link: "kjgj",
      name: "pancake",
      icon: PANCAKE,
    },
    {
      link: "dss",
      name: "pangolin",
      icon: PANGOLIN,
    },
  ];
  const linkAbout = "Learn more about buy";
  const [onPresentModalPlatform] = useModal(
    <ModalPlatform onDismiss={() => null} platforms={platforms} linkAbout={linkAbout} title="Choose platform" />
  );
  return { onPresentModalPlatform };
};

export default useModalPlatform;
