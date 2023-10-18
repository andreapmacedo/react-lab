import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { HomeContainer } from './styles';
import { downloadFile } from '../../utils/fileOperations';
import { ClientForm } from '../../components/ClientForm';
import { ProjectForm } from '../../components/ProjectForm';
// import { ClientList } from '../../components/ClientList';




export function Home() {
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
  const [clients, setClients] = useState([]);
  const fileInput = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        try {
          const jsonData = JSON.parse(event.target.result);
          setClients(jsonData);
        } catch (err) {
          alert("Erro ao processar o arquivo.");
        }
      };
      reader.readAsText(file);
    }
  }

  return (
    <HomeContainer>
    </HomeContainer>
  );
}
