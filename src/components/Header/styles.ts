import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
    width: 100%;
    height: 6.5rem;
    background-color: ${(props) => props.theme.colors["base-background"]};
    display: flex;
    align-items: center;
    justify-content: center;
    
        >div{
            width: 100%;
            display: flex;
            justify-content: space-between;
        }
    `;

export const HeaderButtonContainer = styled.div`
        display: flex;
        align-items: center;
        gap: 0.75rem;
    `;

interface HeaderButtonProps {
    variant: "purple" | "yellow";
}

export const HeaderButton = styled.button<HeaderButtonProps>`
    display: flex ;
    align-items: center;
    justify-content: center;
    gap: 4px;
    min-width: 2.3rem;
    height: 2.3rem;
    border-radius: 6px;
    border: none;
    padding: 0 0.5rem;
    position: relative;
    font-size: ${(props) => props.theme.textSizes["text-regular-s"]};

    ${({ variant }) => css`
        background-color: ${(props) => props.theme.colors[`brand-${variant}-light`]};
        color: ${(props) => props.theme.colors[`brand-${variant}-dark`]};
    `}



    ${({ variant }) => variant === "purple" && css`
    svg{
        color: ${(props) => props.theme.colors["brand-purple"]};
    }
    `}
`;