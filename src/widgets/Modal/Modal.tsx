import React from "react";
import styled from "styled-components";
import { IconButton } from "../../components/Button";
import { CloseIcon } from "../../components/Svg";
import { InjectedProps } from "./types";

interface Props extends InjectedProps {
  title?: string;
  hideCloseButton?: boolean;
  bodyPadding?: string;
  image?: React.ReactNode;
}

const ModalContent = styled.div`
  position: relative;
`;

const StyledModal = styled.div`
  max-width: 404px;
  max-height: 100vh;
  min-width: 303px;
  width: 100%;
  background: ${({ theme }) => theme.colors.dark};
  box-shadow: ${({ theme }) => theme.colors.boxShadow2};
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
  padding: 30px 20px 35px 27px;
`;

const ModalTitle = styled.div`
  align-items: center;
  flex: 1;
  color: ${({ theme }) => theme.colors.white};
`;

const Overlay = styled.div`
  pointer-events: none;
  display: block;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`;

const Heading = styled.div`
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
  letter-spacing: 0.5px;
`;

const Image = styled.div`
  position: absolute;
  top: 17px;
  left: 50%;
  transform: translateX(-50%);
`;

const Modal: React.FC<Props> = ({ title, onDismiss, children, hideCloseButton = false, image }) => (
  <div>
    <Overlay />
    <StyledModal>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>
            <Heading>{title}</Heading>
          </ModalTitle>
          {image ? <Image>{image}</Image> : null}
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
