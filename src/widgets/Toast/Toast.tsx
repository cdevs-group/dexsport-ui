import React, { useCallback, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";
import { Alert, alertVariants } from "../../components/Alert";
import { ToastProps, types } from "./types";

const alertTypeMap = {
  [types.COLLECTION]: alertVariants.COLLECTION,
  [types.SUCCESS]: alertVariants.SUCCESS,
  [types.WINNING]: alertVariants.WINNING,
  [types.INFO]: alertVariants.INFO,
  [types.ERROR]: alertVariants.ERROR,
};

const StyledToast = styled.div`
  transition: all 250ms ease-in;
  width: 100%;

  ${({ theme }) => theme.mediaQueries.sm} {
    max-width: 600px;
  }
`;

const Toast: React.FC<ToastProps> = ({ toast, onRemove, style, ttl, propsWrapperAlert, ...props }) => {
  const timer = useRef<number>();
  const ref = useRef(null);
  const removeHandler = useRef(onRemove);
  const { id, title, description, type, icon } = toast;

  const handleRemove = useCallback(() => removeHandler.current(id), [id, removeHandler]);

  const handleMouseEnter = () => {
    clearTimeout(timer.current);
  };

  const handleMouseLeave = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = window.setTimeout(() => {
      handleRemove();
    }, ttl);
  };

  useEffect(() => {
    if (timer.current) {
      clearTimeout(timer.current);
    }

    timer.current = window.setTimeout(() => {
      handleRemove();
    }, ttl);

    return () => {
      clearTimeout(timer.current);
    };
  }, [timer, ttl, handleRemove]);

  return (
    <CSSTransition nodeRef={ref} timeout={250} style={style} {...props}>
      <StyledToast ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Alert
          title={title}
          icon={icon}
          variant={alertTypeMap[type]}
          onClick={handleRemove}
          propsWrapper={propsWrapperAlert}
        >
          {description}
        </Alert>
      </StyledToast>
    </CSSTransition>
  );
};

export default Toast;
