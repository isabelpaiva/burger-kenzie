import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useContext } from 'react';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { UserContext } from '../../../providers/UserContext';
import { Iregister } from '../../../providers/@types';

const schema = yup
  .object({
    name: yup.string().required('O nome é obrigatório.'),
    email: yup.string().email().required('O email é obrigatório.'),
    password: yup
      .string()
      .matches(/.{8}/, 'Deve conter no mínimo 8 caracteres.')
      .required('Senha Obrigatoria.'),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref('password')], 'As duas senhas devem ser iguais.')
      .required('Confirmação de senha é obrigatória'),
  })
  .required();

function RegisterForm() {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Iregister>({
    resolver: yupResolver(schema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(userRegister)}>
      <Input
        type='text'
        label='Nome'
        placeholder='Digite aqui seu nome'
        errors={errors.name?.message}
        {...register('name')}
      />
      <Input
        label='Email'
        type='text'
        placeholder='Digite aqui seu email'
        errors={errors.email?.message}
        {...register('email')}
      />
      <Input
        label='Senha'
        type='password'
        placeholder='Digite aqui sua senha'
        errors={errors.password?.message}
        {...register('password')}
      />
      <Input
        label='Confirmar senha'
        type='password'
        placeholder='Confirme sua senha'
        errors={errors.passwordConfirmation?.message}
        {...register('passwordConfirmation')}
      />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
}

export default RegisterForm;
