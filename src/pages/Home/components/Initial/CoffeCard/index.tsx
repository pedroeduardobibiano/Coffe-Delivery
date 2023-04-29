import { useState } from "react";
import { FormatMoney } from "../../../../../Util/FormatMoney";
import {
  RegularText,
  TitleText,
} from "../../../../../components/Header/Typograpgy";
import { QuantityInput } from "../../../../../components/QuantityInput";
import { useCart } from "../../../../../hooks/useCart";
import {
  AddCardWrapper,
  CardFotter,
  CoffeCardContainer,
  Description,
  Name,
  Tags,
} from "./styles";

import { ShoppingCart } from "phosphor-react";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface Coffeprops {
  coffee: Coffee;
}

export function CoffeCard({ coffee }: Coffeprops) {
  const { addCoffeeToCart } = useCart();


  
  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }
  function handleDecrease() {
    setQuantity((state) => state - 1);
  }


  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };
    addCoffeeToCart(coffeeToAdd);
  }

  const formattedPrice = FormatMoney(coffee.price);

  return (
    <CoffeCardContainer>
      <img src={`/coffees/${coffee.photo}`} />
      <Tags>
        {coffee.tags.map((tag) => {
          return <span key={`${coffee.id}${tag}`}>{tag}</span>;
        })}
      </Tags>
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <CardFotter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCardWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCardWrapper>
      </CardFotter>
    </CoffeCardContainer>
  );
}
