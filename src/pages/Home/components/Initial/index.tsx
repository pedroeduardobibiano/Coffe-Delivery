import {
  BenefitsContainer,
  InitialContainer,
  InitialContent,
  IntroTitle,
} from "./styles";

import InitialImg from "../../../../assets/Initial.svg";
import { RegularText } from "../../../../components/Header/Typograpgy";
import { InfoWithIcon } from "../../../../components/InfoWithicon";

import { ShoppingCart, Package, Timer, Coffee  } from "phosphor-react";
import { useTheme } from "styled-components";

export function Initial() {
  const {colors} = useTheme();

  return (
    <InitialContainer>
      <InitialContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size="l" color="subtitle" as="h3">
              Com o Coffe Delivery você recebe onde estiver, a qualquer hora
            </RegularText>
          </section>
          <BenefitsContainer>
            <p>
              <InfoWithIcon
                iconBg={colors["brand-yellow-dark"]}
                text="Compra Simples e segura"
                icon={<ShoppingCart weight="fill" />}
              />
            </p>
            <p>
              <InfoWithIcon
                iconBg={colors["base-text"]}
                text="Embalagem matém o café intacto"
                icon={<Package weight="fill" />}
              />
            </p>
            <p>
              <InfoWithIcon
                iconBg={colors["brand-yellow"]}
                text="Entrega rápida e rastreada"
                icon={<Timer weight="fill" />}
              />
            </p>
            <p>
              <InfoWithIcon
                iconBg={colors["brand-purple"]}
                text="O café chega fresquinho até você"
                icon={<Coffee weight="fill" />}
              />
            </p>
          </BenefitsContainer>
        </div>
        <img src={InitialImg} />
      </InitialContent>
    </InitialContainer>
  );
}
