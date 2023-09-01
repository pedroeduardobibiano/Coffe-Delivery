import { useFormContext } from "react-hook-form";
// import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";
import { Input } from "../../../../components/Input";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AddressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  const inputFields = [
    { placeholder: "CEP", type: "number", className: "cep", name: "cep", error: errors.cep?.message },
    { placeholder: "Rua", className: "street", name: "street", error: errors.street?.message },
    { placeholder: "Numero", type: "number", className: "number", name: "number", error: errors.number?.message },
    { placeholder: "Complemento", className: "complement", name: "complement", error: errors.complement?.message, rightText: "Opcional" },
    { placeholder: "Bairro", name: "district", error: errors.district?.message },
    { placeholder: "Cidade", name: "city", error: errors.city?.message },
    { placeholder: "UF", name: "uf", error: errors.uf?.message },
  ];
  
  const renderedInputs = inputFields.map((field, index) => (
    <Input
      key={index}
      {...register(field.name)}
      {...field}
      {...errors}
    />
  ));

  return (
    <AddressFormContainer>
      {renderedInputs}
      {/* <Input
        placeholder="CEP"
        type="number"
        className="cep"
        {...register("cep")}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        className="street"
        {...register("street")}
        error={errors.street?.message}
      />
      <Input
        placeholder="Numero"
        className="number"
        type="number"
        {...register("number")}
        error={errors.number?.message}
      />

      <Input
        placeholder="Complemento"
        className="complement"
        {...register("complement")}
        error={errors.complement?.message}
        rightText="Opcional"
      />

      <Input
        placeholder="Bairro"
        {...register("district")}
        error={errors.district?.message}
      />

      <Input
        placeholder="Cidade"
        {...register("city")}
        error={errors.city?.message}
      />

      <Input placeholder="UF" {...register("uf")} error={errors.uf?.message} /> */}
    </AddressFormContainer>
  );
}
