import styled from "styled-components";

export const PaymentMethoContainer = styled.div`
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors["base-button"]};
  color: ${({ theme }) => theme.colors["base-text"]};
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 0.75rem;

  font-size: 0.75rem;
  text-align: uppercase;
  border-radius: 6px;
  height: 3rem;
  border: 1px solid ${({ theme }) => theme.colors["base-button"]};

  transition: 0.4s;

  svg {
    color: ${({ theme }) => theme.colors["brand-purple"]};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors["base-hover"]};
  }

  user-select: none;
`;
