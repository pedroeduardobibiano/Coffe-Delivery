import styled, { css } from "styled-components";

interface QuantityInputContainerProps {
  size?: "medium" | "small";
}

export const QuantityInputContainer = styled.div<QuantityInputContainerProps>`
  flex: 1;
  background-color: ${({ theme }) => theme.colors["base-button"]};
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 4px;
  border-radius: 6px;

  padding: 0.5rem;

  input {
    text-align: center;
    width: 100%;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors["base-title"]};

    &:focus {
      outline: none;
    }
  }

  ${({ size }) =>
    size == "medium" &&
    css`
      padding: 0.5rem;
    `}

  ${({ size }) =>
    size == "small" &&
    css`
      padding: 0.3rem 0.5rem;
    `}
`;

export const IconWapper = styled.button.attrs({
  type: "button",
})`
  width: 0.875rem;
  height: 0.875rem;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors["brand-purple"]};
  transition: 0.4s;

  &:disabled {
    opacity: 0.4;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors["brand-purple-dark"]};
  }
`;
