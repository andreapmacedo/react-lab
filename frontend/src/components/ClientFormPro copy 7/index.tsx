import { useForm, useFieldArray } from 'react-hook-form';
import { ErrorMessageForm } from '../ErrorMessageForm'
import { Form, Label, Input, InputWrapper, SubmitButton, SectionTitle, AddRemoveButton } from './styles'
import { v4 as uuidv4 } from 'uuid';
// import { Collapse } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import { FaChevronRight } from 'react-icons/fa';

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
  
  const { register, watch, getValues, handleSubmit, reset, control, formState: { errors } } = useForm<FormData>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "contacts"
  });
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);

  const [isContactsSectionExpanded, setIsContactsSectionExpanded] = useState(true);
  const [sectionExpanded, setIsSectionExpanded] = useState({'contacts': false, 'address': false});


  const rotationStyles = useSpring({
    transform: sectionExpanded.address ? 'rotate(90deg)' : 'rotate(0deg)',
    // config: { tension: 1, friction: 0 } // Configuração de animação (opcional)
  });

  const toggleContactsSection = () => {
    setIsContactsSectionExpanded((prev) => !prev);
  };

  const toggleSection = (section: string) => {
    setIsSectionExpanded((prev) => ({...prev, [section]: !prev[section]}));
  }

  const watchedFields = watch(Object.keys(FormData));

  const handleFormSubmit = (data: FormData) => {
    const clientData = {
      id: uuidv4(), // Gera um ID único
      registrationDate: new Date().toISOString(), // Data e hora atuais no formato ISO
      ...data,
    };
    onAddClient(clientData);
    reset();
  };

  useEffect(() => {
    const totalValues = Object.values(getValues()).length;
    const filledFields = Object.values(getValues()).filter(Boolean).length;
    filledFields === totalValues ? setIsButtonEnabled(true) : setIsButtonEnabled(false);
  }, [watchedFields]);

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
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

      {/* <SectionTitle onClick={toggleContactsSection}>
        Endereço da Empresa {isContactsSectionExpanded ? '▼' : '▶'}
      </SectionTitle> */}

      <SectionTitle onClick={() => toggleSection('address')}>
        {/* Endereço da Empresa {sectionExpanded.address ? '▼' : '▶'} */}
        Endereço da Empresa
        <animated.div style={rotationStyles}>
          <FaChevronRight />
        </animated.div>
      </SectionTitle>

      {sectionExpanded.address && (
        
        <>
          <InputWrapper>
            <Label>Rua</Label>
            <Input {...register("street")} />
            {errors.street && <ErrorMessageForm label="a rua" />}
          </InputWrapper>

          <InputWrapper>
            <Label>Número</Label>
            <Input {...register("number")} />
            {errors.number && <ErrorMessageForm label="o número" />}
          </InputWrapper>

          <InputWrapper>
            <Label>Complemento</Label>
            <Input {...register("complement")} />
          </InputWrapper>

          <InputWrapper>
            <Label>Bairro</Label>
            <Input {...register("neighborhood")} />
            {errors.neighborhood && <ErrorMessageForm label="o bairro" />}
          </InputWrapper>

          <InputWrapper>
            <Label>Cidade</Label>
            <Input {...register("city")} />
            {errors.city && <ErrorMessageForm label="a cidade" />}
          </InputWrapper>

          <InputWrapper>
            <Label>Estado</Label>
            <Input {...register("state")} />
            {errors.state && <ErrorMessageForm label="o estado" />}
          </InputWrapper>

          <InputWrapper>
            <Label>CEP</Label>
            <Input {...register("postalCode")} />
            {errors.postalCode && <ErrorMessageForm label="o CEP" />}
          </InputWrapper>

          <InputWrapper>
            <Label>País</Label>
            <Input {...register("country")} />
            {errors.country && <ErrorMessageForm label="o país" />}
          </InputWrapper>
        </>
        
      )}

      <SectionTitle onClick={() => toggleSection('contacts')}>
        Contatos da Empresa {sectionExpanded.contacts ? '▼' : '▶'}
      </SectionTitle>
      {sectionExpanded.contacts && (
        <>
        {/* <SectionTitle>Contatos da Empresa</SectionTitle> */}
        {fields.map((field, index) => (
          <div key={field.id}>
            <InputWrapper>
              <Label>Nome do Contato</Label>
              <Input {...register(`contacts[${index}].contactName`, { required: true })} />
              {errors.contacts && errors.contacts[index]?.contactName && <ErrorMessageForm label="o nome do contato" />}
            </InputWrapper>

            <InputWrapper>
              <Label>Email do Contato</Label>
              <Input {...register(`contacts[${index}].contactEmail`, { required: true })} />
              {errors.contacts && errors.contacts[index]?.contactEmail && <ErrorMessageForm label="o email do contato" />}
            </InputWrapper>

            <InputWrapper>
              <Label>Cargo do Contato</Label>
              <Input {...register(`contacts[${index}].contactPosition`)} />
            </InputWrapper>

            <InputWrapper>
              <Label>Telefone do Contato</Label>
              <Input {...register(`contacts[${index}].contactPhone`)} />
            </InputWrapper>

            <button type="button" onClick={() => remove(index)}>Remover Contato</button>
          </div>
      ))}
      <button type="button" onClick={() => append({ contactName: "", contactEmail: "", contactPosition: "", contactPhone: "" })}>
        Adicionar Contato
      </button>
        </>
      )}

      {/* <SectionTitle>Contato da Empresa</SectionTitle>
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
      </InputWrapper> */}


      {/* <SectionTitle>Contatos da Empresa</SectionTitle>
        {fields.map((field, index) => (
          <div key={field.id}>
            <InputWrapper>
              <Label>Nome do Contato</Label>
              <Input {...register(`contacts[${index}].contactName`, { required: true })} />
              {errors.contacts && errors.contacts[index]?.contactName && <ErrorMessageForm label="o nome do contato" />}
            </InputWrapper>

            <InputWrapper>
              <Label>Email do Contato</Label>
              <Input {...register(`contacts[${index}].contactEmail`, { required: true })} />
              {errors.contacts && errors.contacts[index]?.contactEmail && <ErrorMessageForm label="o email do contato" />}
            </InputWrapper>

            <InputWrapper>
              <Label>Cargo do Contato</Label>
              <Input {...register(`contacts[${index}].contactPosition`)} />
            </InputWrapper>

            <InputWrapper>
              <Label>Telefone do Contato</Label>
              <Input {...register(`contacts[${index}].contactPhone`)} />
            </InputWrapper>

            <button type="button" onClick={() => remove(index)}>Remover Contato</button>
          </div>
      ))}
      <button type="button" onClick={() => append({ contactName: "", contactEmail: "", contactPosition: "", contactPhone: "" })}>
        Adicionar Contato
      </button> */}


      {/* <SubmitButton value="Adicionar Cliente" disabled={!isButtonEnabled} /> */}
      <SubmitButton value="Adicionar Cliente"  />
    </Form>
  );
}
