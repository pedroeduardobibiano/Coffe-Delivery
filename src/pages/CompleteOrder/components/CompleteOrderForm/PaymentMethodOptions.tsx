import { Bank, CreditCard, Money } from "phosphor-react";
import { PaymentMethodInput } from "../PaymentMethodInput";
import { PaymentMethodOptionContainer } from "./styles";

import { useFormContext } from "react-hook-form";
import { RegularText } from "../../../../components/Header/Typograpgy";

export const paymentMethods = {
  credit: {
    label: "Cartão de crédito",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Cartão de débito",
    icon: <Bank size={16} />,
  },
  money: {
    label: "Dinheiro",
    icon: <Money size={16} />,
  },
};

export function PaymentMethodOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;
  return (
    <PaymentMethodOptionContainer>
      {Object.entries(paymentMethods).map(([key, { label, icon }]) => {
        return (
          <PaymentMethodInput
            id={key}
            key={label}
            icon={icon}
            label={label}
            value={key}
            {...register("paymentMethod")}
          />
        );
      })}
      {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
    </PaymentMethodOptionContainer>
  );
}
