import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { MyButton } from '../components/MyButton';
import EncuestaForm  from '../components/EncuestaForm';
import { encuestaService } from './../services/EncuestaService';
import { EncuestaDom } from './../domain/encuestaDomain';
import { Navigate, useNavigate } from 'react-router-dom';


export function Encuesta() {

  const navigate = useNavigate()

  const handleSubmit = (e, encu) => {
    e.preventDefault()
    const enc = EncuestaDom.fromJSON(encu)  
    encuestaService.createEncuesta(enc)
    navigate('/')
  }



  return (
    <EncuestaForm handleSubmit={handleSubmit}>
        <Box align={"right"}>
          <MyButton type="submit">Enviar</MyButton>
        </Box>
    </EncuestaForm>
  );
}
