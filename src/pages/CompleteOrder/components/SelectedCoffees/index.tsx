import { TitleText } from "../../../../components/Header/Typograpgy";
import { useCart } from "../../../../hooks/useCart";
import { CoffeCard } from "../../../Home/components/Initial/CoffeCard";
import { CoffeeCartCard } from "../CoffeeCartCard";
import { ConfimationSection } from "./ConfimationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
  const { cartItems } = useCart();
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>
      <DetailsContainer>
        {cartItems.map((item) => {
          return <CoffeeCartCard key={item.id} coffee={item}/>
        })}

        <ConfimationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
