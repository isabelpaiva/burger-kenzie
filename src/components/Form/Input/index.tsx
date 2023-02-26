import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

const Input = () => (
  <fieldset>
    <StyledTextField/>
    <StyledParagraph fontColor='red'>Erro</StyledParagraph>
  </fieldset>
);

export default Input;
