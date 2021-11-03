import React from "react";
import { TransitionGroup } from "react-transition-group";
import styled from "styled-components";
import { space } from "styled-system";
import Toast from "./Toast";
import { ToastContainerProps } from "./types";
const ZINDEX = 1000;
const TOP_POSITION = 80; // Initial position from the top

const StyledToastContainer = styled.div`
  .enter,
  .appear {
    opacity: 0.01;
  }

  .enter.enter-active,
  .appear.appear-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }

  .exit {
    opacity: 1;
  }

  .exit.exit-active {
    opacity: 0.01;
    transition: opacity 250ms ease-out;
  }
  ${space}
`;

const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  onRemove,
  ttl = 6000,
  stackSpacing = 24,
  propsWrapper,
  propsWrapperAlert,
}) => {
  return (
    <StyledToastContainer {...propsWrapper}>
      <TransitionGroup>
        {toasts.map((toast, index) => {
          // const zIndex = (ZINDEX - index).toString();
          // const top = TOP_POSITION + index * stackSpacing;

          return (
            <Toast
              key={toast.id}
              toast={toast}
              onRemove={onRemove}
              ttl={ttl}
              // style={{ top: `${top}px`, zIndex }}
              style={{ position: "static" }}
              propsWrapperAlert={propsWrapperAlert}
            />
          );
        })}
      </TransitionGroup>
    </StyledToastContainer>
  );
};

export default ToastContainer;
