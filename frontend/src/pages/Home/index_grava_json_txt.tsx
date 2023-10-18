import { useForm } from 'react-hook-form';
import { HomeContainer } from './styles';

export function Home() {
  const { register, handleSubmit, formState: {errors} } = useForm();

  const downloadFile = (data) => {
    // Convertendo dados para JSON
    const jsonData = JSON.stringify(data, null, 2); // O parâmetro '2' aqui é para formatar com 2 espaços de indentação
    const blob = new Blob([jsonData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    
    a.href = url;
    a.download = 'dados.txt';
    a.click();

    // Limpa o objeto URL após o download
    URL.revokeObjectURL(url);
  }

  return (
    <HomeContainer>
      <form
        onSubmit={handleSubmit((data) => {
          alert(JSON.stringify(data));
          downloadFile(data);
        })}
      >
        <label>Cliente</label>
        <input {...register("cliente", {required: true, maxLength: 100 })} />
        {errors.cliente && <span>This field is required</span>}
        
        <label>Email</label>
        <input {...register("email", { required: true, maxLength: 100 })} />
        {errors.email && <span>This field is required</span>}
        
        <input type="submit" />
      </form>
    </HomeContainer>
  );
}
