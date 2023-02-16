import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
    max-width: 100%;
    height: 6.5rem;
    background-color: ${({ theme }) => theme.colors["base-background"]};
    display: flex;
    align-items:center;
    justify-content: center ;

    >div{
        display: flex;
        align-items:center;
        justify-content: space-between;
    }
`;

export const ButtonContainer = styled.div`
        display:flex;
        align-items:center;
        gap: 0.75rem;
`;

interface ButtonProps {
    variant: "purple" | "yellow"
}

export const StandarButton = styled.button<ButtonProps>`
    display:flex;
    justify-content:center;
    align-items:center;
    gap: 4px;
    min-width: 2.3rem;
    height: 2.3rem;
    border-radius: 6px;
    border: none;
    padding: 0 0.5rem;
    position: relative;
    font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};

    ${({ variant, theme }) => css`
     background-color: ${theme.colors[`brand-${variant}-light`]};
     color: ${theme.colors[`brand-${variant}-dark`]};
     `}
 
     ${({ variant, theme }) => variant === 'purple' && css`
     svg{
         color: ${theme.colors[`brand-purple`]};

     }
      `}
     `;