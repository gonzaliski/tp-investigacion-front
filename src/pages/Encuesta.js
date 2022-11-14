import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { MyButton } from '../components/MyButton';
import EncuestaForm  from '../components/EncuestaForm';
import { encuestaService } from './../services/EncuestaService';
import { EncuestaDom } from './../domain/encuestaDomain';

export function Encuesta() {
  const handleSubmit = (e, encu) => {
    e.preventDefault()
    const enc = EncuestaDom.fromJSON(encu)
    setEncuesta(enc)

    encuestaService.createEncuesta(enc)
  }

  const [encuesta, setEncuesta] = useState({})

  return (
    <EncuestaForm handleSubmit={handleSubmit}>
        <Box align={"right"}>
          <MyButton type="submit">Enviar</MyButton>
        </Box>
    </EncuestaForm>
  );
}
