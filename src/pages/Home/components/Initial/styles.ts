import styled from "styled-components";
import {rgba} from 'polished'
import Background from '../../../../assets/Background.png'

export const InitialContainer = styled.section`
    width: 100%;
    height: 34rem;
    background: ${({ theme }) => `url(${Background}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
    background-size: cover ;
`;

export const InitialContent = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
    gap: 3.5rem;
`;