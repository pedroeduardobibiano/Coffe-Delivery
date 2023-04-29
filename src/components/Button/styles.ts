import styled from "styled-components";

export const ButtonConatiner = styled.button`
    padding: 0.5rem 2.8rem;
    color: ${({theme}) => theme.colors["base-white"]};
    font-weight: 700;
    background-color: ${({theme}) => theme.colors["brand-yellow"]};
    font-size: ${({theme}) => theme.textSizes["components-button-g"]};
    border: none;
    border-radius: 6px;
    text-transform: uppercase;
    transition: 0.4s;
    line-height: 1.3rem;
    margin-top: 0.7rem;

    &:disabled{
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover{
        background-color: ${({theme}) => theme.colors["brand-yellow-dark"]};
    }
`;