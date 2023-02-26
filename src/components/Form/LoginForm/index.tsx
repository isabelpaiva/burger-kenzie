import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';


const LoginForm = () => (
  <StyledForm>
    <Input />
    <Input />
    <StyledButton $buttonSize='default' $buttonStyle='green'>
      Entrar
    </StyledButton>
  </StyledForm>
);

export default LoginForm;
