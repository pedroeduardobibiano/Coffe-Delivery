import { ButtonContainer, HeaderContainer, StandarButton } from "./styles";
import logoCoffe from "../../assets/logoCoffe.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={logoCoffe} />
        </NavLink>

        <ButtonContainer>
          <StandarButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </StandarButton>
          <NavLink to="/CompleteOrder">
            <StandarButton variant="yellow">
              <ShoppingCart size={20} weight="fill" />
            </StandarButton>
          </NavLink>
        </ButtonContainer>
      </div>
    </HeaderContainer>
  );
}
