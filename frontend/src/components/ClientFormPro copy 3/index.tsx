import { useForm } from 'react-hook-form';
import { ErrorMessageForm } from '../ErrorMessageForm'
import { Form, Label, Input, InputWrapper, SubmitButton, SectionTitle } from './styles'
import { useEffect, useState } from 'react';

type FormData = {
  companyName: string;
  cnpj: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  contactName: string;
  contactEmail: string;
  contactPosition: string;
  contactPhone: string;
};

export function ClientFormPro({ onAddClient }: { onAddClient: (data: FormData) => void }) {
  
  const { register, watch, getValues, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  
  const watchedFields = watch(Object.keys(FormData));

  useEffect(() => {
    const totalValues = Object.values(getValues()).length;
    const filledFields = Object.values(getValues()).filter(Boolean).length;
    filledFields === totalValues ? setIsButtonEnabled(true) : setIsButtonEnabled(false);
  }, [watchedFields]);

  return (
    <Form
      onSubmit={handleSubmit((data) => {
        onAddClient(data);
        reset();
      })}
    >
      <SectionTitle>Informações da Empresa</SectionTitle>
      <InputWrapper>
        <Label>Nome da Empresa</Label>
        <Input {...register("companyName", { required: true })} />
        {errors.companyName && <ErrorMessageForm label="o nome da empresa" />}
      </InputWrapper>

      <InputWrapper>
        <Label>CNPJ</Label>
        <Input {...register("cnpj", { required: true })} />
        {errors.cnpj && <ErrorMessageForm label="o CNPJ" />}
      </InputWrapper>

      <SectionTitle>Endereço da Empresa</SectionTitle>
      <InputWrapper>
        <Label>Rua</Label>
        <Input {...register("street", { required: true })} />
        {errors.street && <ErrorMessageForm label="a rua" />}
      </InputWrapper>

      <InputWrapper>
        <Label>Número</Label>
        <Input {...register("number", { required: true })} />
        {errors.number && <ErrorMessageForm label="o número" />}
      </InputWrapper>

      <InputWrapper>
        <Label>Complemento</Label>
        <Input {...register("complement")} />
      </InputWrapper>

      <InputWrapper>
        <Label>Bairro</Label>
        <Input {...register("neighborhood", { required: true })} />
        {errors.neighborhood && <ErrorMessageForm label="o bairro" />}
      </InputWrapper>

      <InputWrapper>
        <Label>Cidade</Label>
        <Input {...register("city", { required: true })} />
        {errors.city && <ErrorMessageForm label="a cidade" />}
      </InputWrapper>

      <InputWrapper>
        <Label>Estado</Label>
        <Input {...register("state", { required: true })} />
        {errors.state && <ErrorMessageForm label="o estado" />}
      </InputWrapper>

      <InputWrapper>
        <Label>CEP</Label>
        <Input {...register("postalCode", { required: true })} />
        {errors.postalCode && <ErrorMessageForm label="o CEP" />}
      </InputWrapper>

      <InputWrapper>
        <Label>País</Label>
        <Input {...register("country", { required: true })} />
        {errors.country && <ErrorMessageForm label="o país" />}
      </InputWrapper>

      <SectionTitle>Contato da Empresa</SectionTitle>
      <InputWrapper>
        <Label>Nome do Contato</Label>
        <Input {...register("contactName", { required: true })} />
        {errors.contactName && <ErrorMessageForm label="o nome do contato" />}
      </InputWrapper>

      <InputWrapper>
        <Label>Email do Contato</Label>
        <Input {...register("contactEmail", { required: true })} />
        {errors.contactEmail && <ErrorMessageForm label="o email do contato" />}
      </InputWrapper>

      <InputWrapper>
        <Label>Cargo do Contato</Label>
        <Input {...register("contactPosition", { required: true })} />
        {errors.contactPosition && <ErrorMessageForm label="o cargo do contato" />}
      </InputWrapper>

      <InputWrapper>
        <Label>Telefone do Contato</Label>
        <Input {...register("contactPhone", { required: true })} />
        {errors.contactPhone && <ErrorMessageForm label="o telefone do contato" />}
      </InputWrapper>

      <SubmitButton value="Adicionar Cliente" disabled={!isButtonEnabled} />
    </Form>
  );
}
