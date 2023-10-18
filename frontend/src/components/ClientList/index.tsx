import { useData } from '../../contexts/DataContext';

export function ClientList() {
  const { data } = useData();

  return (
    <div>
      <h1>Lista de Clientes:</h1>
      <ul>
        {data.clients.map((client, index) => (
          <li key={index}>
            {client.companyName} 
          </li>
        ))}
      </ul>
    </div>
  );
}