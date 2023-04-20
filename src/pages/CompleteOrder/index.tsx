import { CompletedOrderForm } from "./components/CompleteOrderForm";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrder(){
    return(
        <CompleteOrderContainer className="container">
                <CompletedOrderForm/>
        </CompleteOrderContainer>
    )
}