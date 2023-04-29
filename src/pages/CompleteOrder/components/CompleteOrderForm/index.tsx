import { useTheme } from "styled-components";
import { TitleText } from "../../../../components/Header/Typograpgy";
import { SectionTitle } from "../SectionTitle";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";

import { MapPinLine, CurrencyDollar } from "phosphor-react";
import { AddressForm } from "./AddressForm";
import { PaymentMethodOptions } from "./PaymentMethodOptions";

export function CompletedOrderForm() {
  const { colors } = useTheme();

  return (
    <CompleteOrderFormContainer>
      <TitleText size="xs" color="subtitle">
        Complete seu pedido
      </TitleText>
      <FormSectionContainer>
        <SectionTitle
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber o seu pedido"
          icon={<MapPinLine size={22} color={colors["brand-yellow-dark"]} />}
        />
        <AddressForm />
      </FormSectionContainer>

      <FormSectionContainer>
        <SectionTitle
          title="Pagamento"
          subtitle="Informe o endereço onde deseja receber o seu pedido"
          icon={<CurrencyDollar size={22} color={colors["brand-purple"]} />}
        />

        <PaymentMethodOptions/>
        
      </FormSectionContainer>
    </CompleteOrderFormContainer>
  );
}
