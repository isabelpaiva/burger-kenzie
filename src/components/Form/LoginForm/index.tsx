import React ,{ useContext } from 'react';
import { useForm } from 'react-hook-form';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Ilogin } from '../../../providers/@types';
import { UserContext } from '../../../providers/UserContext';


const LoginForm = () => {

  const { userLogin } = useContext(UserContext)

  const { register, handleSubmit, formState: { errors }} = useForm<Ilogin>();

  return (

<StyledForm onSubmit={handleSubmit(userLogin)}>
    <Input
        label="E-mail"
        type="email"
        placeholder="Digite seu e-mail"
        defaultValue=""
        register={register}
        name="email"
        errors={errors.email}
      />
     <Input
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
        register={register}
        name="password"
        errors={errors.password}
      />
    <StyledButton $buttonSize='default' $buttonStyle='green'>
      Entrar
    </StyledButton>
  </StyledForm>
  )
  
};

export default LoginForm;
