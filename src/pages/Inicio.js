import { Heading, Box, Text, HStack,Select, Spacer, TableContainer, Table, Thead, Tr,Td,Th,Tbody,Icon } from '@chakra-ui/react';
import { FaMusic,FaFileAlt } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'

import { MyButton } from '../components/MyButton';
import { contenidoService } from './../services/ContenidoService';

export function Inicio() {
  const navigate = useNavigate()

  const goToEncuesta = () => {
    navigate("/encuesta",{replace:'true'})
  }

  const goToEditar = (id) => {
    navigate(`/encuesta/editar/${id}`,{replace:'true'})
  }
  const getAllContenidos = () => {
    const content = contenidoService.getAllContenidos()
    setContenidos(content)
  }

  const [contenidos, setContenidos] = useState([])

  useEffect( () => {
    getAllContenidos()
  })


  return (
    <>
      <Heading>Inicio</Heading>
      <Box>
      <Text align="left" fontSize='2xl'>Nueva descarga</Text>
        <Box w="80vw" py="10px" px="15px" border="1px solid gray">
          <HStack>
            <Select maxW="40%"  placeholder="Seleccionar contenido">
              <option>Contenido</option>
              <option>Otro</option>
              <option>Una cancion</option>
              <option>Un doc</option>
              <option>Otro doc</option>
            </Select>
            <Spacer></Spacer>
            <MyButton handleClick={goToEncuesta}>Descargar</MyButton>
          </HStack>
        </Box>
        <TableContainer>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Historial de descargas</Th>
                        <Th>Velocidad</Th>
                        <Th>Mi puntaje</Th>
                        <Th>Puntaje Promedio</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {contenidos.map(cont=>(
                    <Tr key={cont.id}>
                        <Td> <Icon as={cont.tipo_contenido == "musica" ? FaMusic : FaFileAlt }/> {cont.titulo}</Td>
                        <Td> {cont.velocidad}</Td>
                        <Td onClick={ cont.puntaje? () => goToEditar(cont.idDescarga) : null} cursor={cont.puntaje? 'pointer' : ''}> {cont.puntaje}</Td>
                        <Td> {cont.puntaje_promedio}</Td>
                    </Tr>

                    ))}
                </Tbody>
            </Table>
        </TableContainer>
      </Box>
    </>
  );
}
