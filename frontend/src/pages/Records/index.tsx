
import React, { useState } from 'react';
import { HistoryContainer } from './styles'
import { useData } from '../../contexts/DataContext';
import { ClientForm } from '../../components/ClientForm';
import { ClientFormPro } from '../../components/ClientFormPro';
import { ProjectForm } from '../../components/ProjectForm';
import { SelectBox } from '../../components/SelectBox';

export function Records() {
  const { data, setData } = useData();

  const [selectedValue, setSelectedValue] = useState<string>('Cliente');

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  const addClient = (newClient: Client) => {
    setData(prevData => ({
      ...prevData,
      clients: [...prevData.clients, newClient]
    }));
  };

  return (
    <HistoryContainer>
      <h1>Cadastrar</h1>

      <div>
      <SelectBox
        options={data.records}
        onChange={handleSelectChange}
      />
      {selectedValue === 'Cliente' && 
      
      <ClientFormPro onAddClient={(data) => {
        addClient(data);
        }} 
      />  
    }
      {selectedValue === 'Projeto' && 
      
      <ProjectForm onAddClient={(data) => {
        addClient(data);
        }} 
      />  
    }
    
    </div>
    </HistoryContainer>
  )
}