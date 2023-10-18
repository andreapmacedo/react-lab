
import { ErrorMessage } from './styles'

export function ErrorMessageForm({ label }) {
  
  return (
    <ErrorMessage>
      {`Necessário informar ${label}`}
    </ErrorMessage>

  );
}
