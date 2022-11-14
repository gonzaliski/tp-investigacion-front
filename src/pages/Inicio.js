import { Heading, Box, Text, HStack, Select, Spacer, TableContainer, Table, Thead, Tr, Td, Th, Tbody, Icon, Flex } from '@chakra-ui/react';
import { FaMusic,FaFileAlt, FaDownload, FaEdit } from "react-icons/fa"
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'

import { MyButton } from '../components/MyButton';
import { contenidoService } from './../services/ContenidoService';

export function Inicio() {
  const navigate = useNavigate()
  

  const goToEncuesta = (id) => {
    const params = {idDescarga: id}
    navigate({pathname: "/encuesta",replace:'true', search: `?${createSearchParams(params)}`})
  }

  const goToEditar = (id) => {
    navigate(`/encuesta/editar/${id}`,{replace:'true'})
  }
  // const getAllContenidos = () => {
  //   const content = contenidoService.getAllContenidos()
  //   setContenidos(content)
  // }

  const getAllContenidos = async () => {
    const content = await contenidoService.getAll()
    console.log(content);
    setContenidos(content)
  }

  const handleDownload = (id) => {
    goToEncuesta(id)
  }

  const [contenidos, setContenidos] = useState([])

  

  useEffect( () => {
    getAllContenidos()
  },[])


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
                        <Th fontSize="lg">Historial de descargas</Th>
                        <Th fontSize="lg">Velocidad</Th>
                        <Th fontSize="lg">Mejor puntaje</Th>
                        <Th fontSize="lg">Puntaje Promedio</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {contenidos.map(cont=>(
                    <Tr key={cont.id}>
                        <Td> <Icon as={cont.tipoContenido == "musica" ? FaMusic : FaFileAlt }/> {cont.titulo}</Td>
                        <Td> {cont.velocidadPromedio} Mbps</Td>
                        <Td  > {cont.puntajeMax || null}</Td>
                        <Td> {cont.puntajePromedio || null}</Td>
                        <Td> <Flex gap={3}><Icon as={FaDownload} color='#7c4cf2' cursor='pointer' onClick={() => handleDownload(cont.id)}/>{cont.usuarioResponde? <Icon cursor='pointer' onClick={() => goToEditar(cont.id)} as={FaEdit} color='#7c4cf2'/> : null}</Flex> </Td>
                    </Tr>

                    ))}
                </Tbody>
            </Table>
        </TableContainer>
      </Box>
    </>
  );
}
