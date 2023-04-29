import { TitleText } from "../../../../../components/Header/Typograpgy";
import { coffees } from "../../../../../data";
import { CoffeCard } from "../CoffeCard";
import { CoffeList, OurCoffesContainer } from "./styles";

export function OurCoffes(){
    return(
        <OurCoffesContainer className="container">
            <TitleText size="l" color="subtitle">
                Nosso Cafés
            </TitleText>
            <CoffeList>

            {coffees.map((coffee)=>{
                return <CoffeCard key={coffee.id} coffee={coffee} />
            })}

            </CoffeList>
        </OurCoffesContainer>
    )
}