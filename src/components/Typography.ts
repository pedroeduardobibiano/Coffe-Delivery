import styled from "styled-components";

interface titleTextProps {
    size?: "xl" | "l" | "m" | "s" | "xs";
    color?: "title" | "subtitle" | "text";
    weight?: "string" | "number";
}

interface RegularTextProps {
    size?: "l" | "m" | "s";
    color?: "text" | "subtitle" | "label";
    weight?: "string" | "number";
}



export const TitleText = styled.h1<titleTextProps>`
    color: ${(props) => props.theme.colors[`base-${props.color ?? "title"}`]};
    font-size: ${(props) => props.theme.textSizes[`title-title-${props.size ?? "m"}`]};
    font-family: ${(props) => props.theme.fonts.title};
    line-height: 130%;
    font-weight: ${(props) => props.weight ?? 800};
`;

export const RegularText = styled.p<RegularTextProps>`
    color: ${(props) => props.theme.colors[`base-${props.color ?? "title"}`]};
    font-size: ${(props) => props.theme.textSizes[`text-regular-${props.size ?? "m"}`]};
    font-family: ${(props) => props.theme.fonts.regular};
    line-height: 130%;
    font-weight: ${(props) => props.weight ?? 400};
`;