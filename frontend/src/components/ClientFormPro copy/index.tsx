import { useForm } from 'react-hook-form';
import { ErrorMessageForm } from '../ErrorMessageForm'
import { Form, Label, Input, InputWrapper, SubmitButton } from './styles'
import { useEffect, useState } from 'react';

type FormData = {
  companyName: string;
  contactName: string;
  contactEmail: string;
};

export function ClientFormPro({ onAddClient }: { onAddClient: (data: FormData) => void }) {
  
  const { register, watch, getValues, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  
  const watchedFields = watch(["companyName", "contactName", "contactEmail"]);

  useEffect(() => {
    const values = getValues(["companyName", "contactName", "contactEmail"]);
    const totalValues = Object.values(values).length;
    const filledFields = Object.values(values).filter(Boolean).length;
    filledFields === totalValues ? setIsButtonEnabled(true) : setIsButtonEnabled(false);
  }, [watchedFields]);

  return (
    <Form
      onSubmit={handleSubmit((data) => {
        onAddClient(data);
        reset();
      })}
    >
      <InputWrapper>
        <Label>Nome da Empresa</Label>
        <Input {...register("companyName", { required: true })} />
        {errors.companyName && <ErrorMessageForm label="o nome da empresa" />}
      </InputWrapper>

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

      <SubmitButton value="Adicionar Cliente" disabled={!isButtonEnabled} />
    </Form>
  );
}
