import { PaymentMethodInput } from "../PaymentMethodInput";
import {  PaymentMethodOptionContainer } from "./styles";

export function PaymentMethodOptions(){
    return(
        <PaymentMethodOptionContainer>
            <PaymentMethodInput/>
            <PaymentMethodInput/>
            <PaymentMethodInput/>
        </PaymentMethodOptionContainer>
    )
}