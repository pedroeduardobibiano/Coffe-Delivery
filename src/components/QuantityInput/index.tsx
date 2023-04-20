import { IconWapper, QuantitInputContainer } from "./styles";

import { Minus, Plus } from "phosphor-react";

export function QuantityInput() {
  return (
    <QuantitInputContainer>
      <IconWapper>
        <Minus size={14} weight="fill" />
      </IconWapper>
      <input type="number" readOnly value={1} />
      <IconWapper>
        <Plus size={14} weight="fill" />
      </IconWapper>
    </QuantitInputContainer>
  );
}
