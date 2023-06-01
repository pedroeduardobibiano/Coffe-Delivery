import { ButtonContainer, HeaderContainer, StandarButton } from "./styles";
import logoCoffe from "../../assets/logoCoffe.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink, useLocation } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { OrderData } from "../../pages/CompleteOrder";

interface Location {
  state: OrderData;
}

export function Header() {
  const { cartQuantity } = useCart();

  const { state } = useLocation() as unknown as Location;

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={logoCoffe} />
        </NavLink>

        <ButtonContainer>
          <StandarButton variant="purple">
            <MapPin size={20} weight="fill" />
            {!state ? "Localização Registrada" : `${state.city}, ${state.uf}`}
          </StandarButton>
          <NavLink to="/CompleteOrder">
            <StandarButton variant="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </StandarButton>
          </NavLink>
        </ButtonContainer>
      </div>
    </HeaderContainer>
  );
}
