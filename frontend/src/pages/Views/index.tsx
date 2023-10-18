// import { useData } from '../../contexts/DataContext';
import { HomeContainer } from './styles';
import { ClientList } from '../../components/ClientList';


export function Views() {
  
  return (
    <HomeContainer>
      <ClientList />
    </HomeContainer>
  );
}
