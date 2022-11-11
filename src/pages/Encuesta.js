import { Box } from '@chakra-ui/react';
import { MyButton } from '../components/MyButton';
import EncuestaForm  from '../components/EncuestaForm';

export function Encuesta() {
  const handleSubmit = (e) => {
    e.preventDefault()
}
  return (
    <EncuestaForm>
        <Box align={"right"}>
          <MyButton type="submit" handleSubmit={handleSubmit}>Enviar</MyButton>
        </Box>
    </EncuestaForm>
  );
}
