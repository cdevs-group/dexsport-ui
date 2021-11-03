import React from "react";
import styled from "styled-components";
import { IconButton } from "../../components/Button";
import { CloseIcon } from "../../components/Svg";
import { InjectedProps } from "./types";
import { Gift2 } from "../../constants/images";

interface Props extends InjectedProps {
  title?: string;
  hideCloseButton?: boolean;
  bodyPadding?: string;
  welcome?: boolean;
  image?: boolean;
  paddingTopHeader?: string;
}

const ModalContent = styled.div`
  position: relative;
`;

const StyledModal = styled.div`
  max-width: 404px;
  max-height: 100vh;
  min-width: 303px;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgGray};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;
  ${({ theme }) => theme.mediaQueries.xs} {
    min-width: 360px;
    width: 100%;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    min-width: 404px;
    width: 100%;
  }
`;

const ModalHeader = styled.div<{ paddingTopHeader?: string }>`
  display: flex;
  align-items: center;
  padding: ${({ paddingTopHeader }) => ` ${paddingTopHeader || "20px"} 14px 24px`};
  &.welcome {
    padding-bottom: 0;
  }
  ${({ theme }) => theme.mediaQueries.md} {
    padding: ${({ paddingTopHeader }) => ` ${paddingTopHeader || "27px"} 20px 40px 27px`};
    &.welcome {
      padding-bottom: 0;
    }
  }
`;

const ModalTitle = styled.div`
  align-items: center;
  flex: 1;
  color: ${({ theme }) => theme.colors.text};
`;

const Overlay = styled.div`
  pointer-events: none;
  display: block;
  background: ${({ theme }) => theme.colors.overlayBg};
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`;

const Heading = styled.div`
  &.welcome {
    font-weight: 500;
    font-size: 21px;
    letter-spacing: 0.5px;
  }
`;

const Image = styled.div`
  position: absolute;
  top: 17px;
  left: 50%;
  transform: translateX(-50%);
`;

const Modal: React.FC<Props> = ({
  welcome,
  title,
  onDismiss,
  children,
  hideCloseButton = false,
  image,
  paddingTopHeader,
}) => (
  <div>
    <Overlay />
    <StyledModal>
      <ModalContent>
        <ModalHeader className={welcome ? "welcome" : ""} paddingTopHeader={paddingTopHeader}>
          <ModalTitle>
            <Heading className={welcome ? "welcome" : ""}>{title}</Heading>
          </ModalTitle>
          {image ? (
            <Image>
              <img src={Gift2} alt="" />
            </Image>
          ) : null}
          {!hideCloseButton && (
            <IconButton variant="text" onClick={onDismiss} aria-label="Close the dialog">
              <CloseIcon />
            </IconButton>
          )}
        </ModalHeader>
        {children}
      </ModalContent>
    </StyledModal>
  </div>
);

export default Modal;
