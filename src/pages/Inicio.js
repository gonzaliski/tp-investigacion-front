import { Heading, Box, Text, HStack, Select, Spacer, TableContainer, Table, Thead, Tr, Td, Th, Tbody, Icon, Flex } from '@chakra-ui/react';
import { FaMusic,FaFileAlt, FaDownload, FaEdit } from "react-icons/fa"
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'

import { MyButton } from '../components/MyButton';
import { contenidoService } from './../services/ContenidoService';
import { user } from './../services/AuthService';
import { descargaService } from './../services/DescargaService';

export function Inicio() {
  const navigate = useNavigate()
  

  const goToEncuesta = (id) => {
    const params = {idDescarga: id}
    navigate({pathname: "/encuesta",replace:'true', search: `?${createSearchParams(params)}`})
  }

  const goToEditar = (idRespuesta) => {
    navigate(`/encuesta/editar/${idRespuesta}`,{replace:'true'})
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

  const handleDownload = async (descarga) => {
    const descargaId = await descargaService.createDescarga(descarga)
    goToEncuesta(descargaId.data)

  }

  const [contenidos, setContenidos] = useState([])

  

  useEffect( () => {
    getAllContenidos()
  },[])


  return (
    <>
      <Heading>Inicio</Heading>
      <Flex gap={5} direction='column'>
      <Box borderBottom='1px solid #7c4cf2'><Text fontWeight='bold' align="left" fontSize='3xl'>Nueva descarga</Text></Box>
        {/* <Box w="80vw" py="10px" px="15px" border="1px solid gray">
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
        </Box> */}
        <TableContainer>
            <Table>
                <Thead>
                    <Tr>
                        <Th fontSize="lg">Historial de descargas</Th>
                        <Th fontSize="lg">Velocidad</Th>
                        <Th fontSize="lg">Mi puntaje</Th>
                        <Th fontSize="lg">Puntaje Promedio</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {contenidos.map(cont=>(
                    <Tr key={cont.id}>
                        <Td> <Icon as={cont.tipoContenido == "musica" ? FaMusic : FaFileAlt }/> {cont.titulo}</Td>
                        <Td> {cont.velocidadPromedio? `${cont.velocidadPromedio} Mbps` : null}</Td>
                        <Td  > {cont.puntajeMax || null}</Td>
                        <Td> {cont.puntajePromedio || null}</Td>
                        <Td> <Flex gap={3}>
                          <Icon as={FaDownload} color='#7c4cf2' cursor='pointer' onClick={() => handleDownload(cont)}/>{cont.idUsuarioResponde === user.id ? 
                          <Icon cursor='pointer' onClick={() => goToEditar(cont.idRespuesta)} as={FaEdit} color='#7c4cf2'/> : null}</Flex> 
                        </Td>
                    </Tr>

                    ))}
                </Tbody>
            </Table>
        </TableContainer>
      </Flex>
    </>
  );
}
