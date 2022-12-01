import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from 'phosphor-react'

import CoffeLogoImg from '../../assets/CoffeLogo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <div className="container">
                <img src={CoffeLogoImg} alt="" />

                <HeaderButtonContainer>
                    <HeaderButton variant="purple">
                        <MapPin size={20} weight='fill' />
                        Porto Alegre, RS
                    </HeaderButton>
                    
                    <HeaderButton variant="yellow">
                        <ShoppingCart size={20} weight='fill' />
                    </HeaderButton>
                </HeaderButtonContainer>
            </div>
        </HeaderContainer>
    )
}