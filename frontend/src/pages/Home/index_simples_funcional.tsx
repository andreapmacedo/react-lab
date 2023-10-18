import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { HomeContainer } from './styles';
import { downloadFile } from '../../utils/fileOperations';
export function Home() {
  const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);
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
      <form
        onSubmit={handleSubmit((data) => {
          setClients(prevClients => [...prevClients, data]);
          reset();
        })}
      >
        <label>Cliente</label>
        <input {...register("cliente", { required: true, maxLength: 100 })} />
        {errors.cliente && <span>This field is required</span>}

        <label>Email</label>
        <input {...register("email", { required: true, maxLength: 100 })} />
        {errors.email && <span>This field is required</span>}

        <input type="submit" value="Add Cliente" />
      </form>
      <button onClick={downloadFile}>Download Lista de Clientes</button>
      <br />
      <label>Upload de arquivo</label>
      <input type="file" ref={fileInput} onChange={handleFileChange} />
      <ul>
        {clients.map((client, idx) => (
          <li key={idx}>{client.cliente} - {client.email}</li>
        ))}
      </ul>
    </HomeContainer>
  );
}
