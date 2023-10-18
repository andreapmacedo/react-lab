// import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'

import {
  HomeContainer,
} from './styles'



export function Home() {
  const { register, handleSubmit, watch, reset, formState: {errors} } = useForm()

  // console.log(errors);
  console.log(watch("email")) 

  return (
    <HomeContainer>
    <form
      onSubmit={handleSubmit((data) => {
        alert(JSON.stringify(data));
      })}
    >
      <label>Cliente</label>
      
      <input {...register("cliente", {required: true, maxLength: 100 })} />
        {errors.cliente && <span>This field is required</span>}
      <label>email</label>
      <input
        {...register("email", { required: true, maxLength: 100 })}
      />
      {errors.email && <span>This field is required</span>}
      <input type="submit" />
    </form>
    </HomeContainer>
  )
}