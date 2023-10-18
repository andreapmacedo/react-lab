
import { HistoryContainer } from './styles'
import { ClientList } from '../../components/ClientList'
import { useData } from '../../contexts/DataContext'

export function Sync() {
  const { data, downloadData, uploadData } = useData();
  return (
    <HistoryContainer>
      <h1>Sync</h1>
      <ClientList />
      <button onClick={downloadData}>Guardar dados</button>
      <input type="file" onChange={uploadData} />

    </HistoryContainer>
  )
}