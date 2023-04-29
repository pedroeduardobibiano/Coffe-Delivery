import { PaymentMethoContainer } from "./styles";

import {CreditCard} from 'phosphor-react'

export function PaymentMethodInput(){
    return(
        <PaymentMethoContainer>
            <CreditCard size={16}/>
            Cartão de crédito
        </PaymentMethoContainer>
    )
}