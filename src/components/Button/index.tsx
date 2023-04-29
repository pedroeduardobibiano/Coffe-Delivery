import { ButtonHTMLAttributes } from "react";
import { ButtonConatiner } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string | number;
}

export function Button({ text, ...props }: ButtonProps) {
  return <ButtonConatiner {...props}>{text}</ButtonConatiner>;
}
