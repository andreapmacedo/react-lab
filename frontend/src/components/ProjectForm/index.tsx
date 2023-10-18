import { useForm } from 'react-hook-form';
import { ErrorMessageForm } from '../ErrorMessageForm'
import { Form, Label, Input, InputWrapper, SubmitButton } from './styles'
import { useEffect, useState } from 'react';

export function ProjectForm({ onAddClient }: { onAddClient: (data: any) => void }) {
  
  
  const { register, watch, getValues, handleSubmit, reset, formState: { errors } } = useForm();
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  
   // Observa as mudanças nos campos do formulário
   const watchedFields = watch(["cliente", "email"]);

  useEffect(() => {
    /**
     * Verifica se todos os campos do formulário foram preenchidos
     * e habilita o botão de submit
     * */
    /**
     *  values -> são os campos do formulário monitorados
     *  totalValues -> quantidade de campos do formulário
     *  filledFields -> quantidade de campos preenchidos
     */
    const values = getValues(["cliente", "email"]);
    const totalValues = Object.values(values).length;
    const filledFields = Object.values(values).filter(Boolean).length;
    filledFields === totalValues ? setIsButtonEnabled(true) : setIsButtonEnabled(false);
    // console.log(filledFields);
    // filledFields === 2 ? setIsButtonEnabled(true) : setIsButtonEnabled(false);
  }, [watchedFields]);

  return (
    <Form
      onSubmit={handleSubmit((data) => {
        onAddClient(data);
        reset();
      })}
    >
      <InputWrapper>
        <Label>Cliente</Label>
        <Input {...register("cliente", { required: true})} />
        {errors.cliente && <ErrorMessageForm label="o cliente"/>}
      </InputWrapper>

      <InputWrapper>
        <Label>Email</Label>
        <Input {...register("email", { required: true })} />
        {errors.email && <ErrorMessageForm label="o email"/>}
      </InputWrapper>

      <SubmitButton value="Add Cliente" disabled={!isButtonEnabled} />
    </Form>
  );
}
