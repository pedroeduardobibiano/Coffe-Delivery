import { ButtonContainer, HeaderContainer, StandarButton } from "./styles";
import logoCoffe from '../../assets/logoCoffe.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
    return (
        <HeaderContainer>
            <div className="container">
                <img src={logoCoffe} />

                <ButtonContainer>
                    <StandarButton variant="purple">
                        <MapPin size={20} weight="fill"/>
                        Porto Alegre, RS
                    </StandarButton>
                    <StandarButton variant="yellow">
                        <ShoppingCart size={20} weight="fill"/>
                    </StandarButton>
                </ButtonContainer>
            </div>
        </HeaderContainer>
    )
}