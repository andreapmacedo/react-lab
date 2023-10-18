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
        if(data.cliente && data.email) {
            setClients(prevClients => [...prevClients, {cliente: data.cliente, email: data.email}]);
        } else if(data.clientProject && data.projectName && data.dueDate) {
            setProjects(prevProjects => [...prevProjects, data]);
        }
        reset();
      })}
    >
      <h2>Adicionar Cliente</h2>
      <label>Cliente</label>
      <input {...register("cliente", { maxLength: 100 })} />
      {errors.cliente && <span>This field is required</span>}

      <label>Email</label>
      <input {...register("email", { maxLength: 100 })} />
      {errors.email && <span>This field is required</span>}
      
      <h2>Adicionar Projeto</h2>
      <label>Cliente do Projeto</label>
      <select {...register("clientProject")}>
        {clients.map((client, idx) => (
          <option key={idx} value={client.cliente}>{client.cliente}</option>
        ))}
      </select>

      <label>Nome do Projeto</label>
      <input {...register("projectName")} />

      <label>Data de Vencimento</label>
      <input type="date" {...register("dueDate")} />

      <input type="submit" value="Adicionar" />
    </form>
    <button onClick={() => downloadFile({clients, projects})}>Download Dados</button>
    <br />
    <label>Upload de arquivo</label>
    <input type="file" ref={fileInput} onChange={handleFileChange} />
    
    <h2>Clientes</h2>
    <ul>
      {clients.map((client, idx) => (
        <li key={idx}>{client.cliente} - {client.email}</li>
      ))}
    </ul>

    <h2>Projetos</h2>
    <ul>
      {projects.map((project, idx) => (
        <li key={idx}>{project.clientProject} - {project.projectName} - {project.dueDate}</li>
      ))}
    </ul>
  </HomeContainer>
  );
}
