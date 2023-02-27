import React, { useContext } from 'react';
import Input from '../Input';
import { UserContext } from '../../../providers/UserContext';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { Iregister } from '../../../providers/@types';


const schema = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório")
    .min(3, "O nome precisa ter pelo menos 3 caracteres.")
    .max(200, "O nome pode ter no máximo 200 caracteres."),

  email: yup
    .string()
    .required("Email obrigatório")
    .email("É necessário fornecer um email válido."),

  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
    .matches(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula.")
    .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
    .matches(
      /(?=.*?[#?!@$%^&*-])/,
      "É necessário pelo menos um caractere especial."
    )
    .min(8, "É necessário uma senha de pelo menos 8 caracteres."),

   passwordConfirmed: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password"), "As senhas não coincidem"], "As senhas não coincidem")
});

function RegisterForm() {
  const { userRegister } = useContext(UserContext);

  const {
    register,   
    handleSubmit,
    formState: { errors },
  } = useForm<Iregister>({
    resolver: yupResolver(schema)
  });

  return (
    <StyledForm onSubmit={handleSubmit(userRegister)}>
     <Input
        label="Nome"
        type="text"
        placeholder="Digite seu nome"
        defaultValue=""
        register={register}
        name="name"
        errors={errors.name}
      />
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
      <Input
        label="Confirmar senha"
        type="password"
        placeholder="Confirme sua senha"
        defaultValue=""
        register={register}
        name="passwordConfirmed"
        errors={errors.passwordConfirmed}
      />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
}

export default RegisterForm;
