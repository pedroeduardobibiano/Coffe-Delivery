import { RegularText, TitleText } from "../../components/Header/Typograpgy";
import { OrderConfirmedContainer, OrderDetailContainer } from "./styles";

import confirmedOrder from "../../assets/confirmed-order.svg";
import { InfoWithIcon } from "../../components/InfoWithicon";

import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";

export function OrderConfimedPage() {
  const { colors } = useTheme();

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido Confirmado</TitleText>
        <RegularText size="l">
          Agora é só aquardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors["brand-purple"]}
            text={
              <RegularText>
                Entrega em Entrega em{" "}
                <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors["brand-yellow"]}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors["brand-yellow-dark"]}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>Cartão de crédito</strong>
              </RegularText>
            }
          />
        </OrderDetailContainer>

        <img src={confirmedOrder} alt="" />
      </section>
    </OrderConfirmedContainer>
  );
}
