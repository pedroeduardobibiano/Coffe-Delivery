import { CompletedOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CompleteOrderContainer } from "./styles";

export function CompleteOrder() {
  return (
    <CompleteOrderContainer className="container">
      <CompletedOrderForm />
      <SelectedCoffees />
    </CompleteOrderContainer>
  );
}
