import { FormatMoney } from "../../../../Util/FormatMoney";
import { Button } from "../../../../components/Button";
import { RegularText } from "../../../../components/Header/Typograpgy";
import { useCart } from "../../../../hooks/useCart";
import { ConfimationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5;

export function ConfimationSection() {
  const { cartItemsTotal, cartQuantity } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal


  const formattedItemsTotal = FormatMoney(cartItemsTotal) 
  const formattedCartTotal = FormatMoney(cartTotal) 
  const formatDeliveryPrice = FormatMoney(DELIVERY_PRICE) 

  return (
    <ConfimationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText>R$ {formattedItemsTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formatDeliveryPrice}</RegularText>
      </div>

      <div>
        <RegularText weight={700} color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight={700} color="subtitle" size="l">
          R$ {formattedCartTotal}
        </RegularText>
      </div>
      <Button text="Confirmar Pedido" disabled={cartQuantity <= 0} />
    </ConfimationSectionContainer>
  );
}
