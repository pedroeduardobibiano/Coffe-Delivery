import { InputHTMLAttributes, forwardRef } from "react";
import {
  InputStyleContainer,
  InputSyled,
  InputWrapper,
  RightText,
} from "./styles";
import { RegularText } from "../Header/Typograpgy";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
};

// export function Input({ ...props }: InputProps) {
//   return <InputStyleContainer {...props} />;
// }

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, rightText, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <InputSyled {...props} ref={ref} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error && <RegularText size="s">{error}</RegularText>}
      </InputWrapper>
    );
  }
);
