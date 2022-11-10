import { Heading, Box, Text, HStack,Select, Spacer, TableContainer, Table, Thead, Tr,Td,Th,Tbody,Icon } from '@chakra-ui/react';
import { FaMusic,FaFileAlt } from "react-icons/fa"

import { MyButton } from '../components/MyButton';

export function Inicio() {
    const contenidos = [
        {
        id:1,
        titulo:"Smells like teen spirit - Nirvana",
        velocidad:"15mbps",
        puntaje:8.6,
        puntaje_promedio:8.6,
        tipo_contenido:"musica"
        },
        {
        id:2,
        titulo:"Wind of change - Scorpions",
        velocidad:"13mbps",
        puntaje:null,
        puntaje_promedio:7.8,
        tipo_contenido:"musica"

        },
        {
        id:3,
        titulo:"Resumen primer parcial - Base de datos",
        velocidad:"12mbps",
        puntaje:null,
        puntaje_promedio:8.3,
        tipo_contenido:"documento"

        },
        {
        id:4,
        titulo:"Everlong - Foo Fighters",
        velocidad:"14mbps",
        puntaje:9.2,
        puntaje_promedio:9.2,
        tipo_contenido:"musica"

        },
        {
        id:5,
        titulo:"Resumen segundo parcial - Base de datos",
        velocidad:"13mbps",
        puntaje:8.5,
        puntaje_promedio:8.5,
        tipo_contenido:"documento"

        }

]


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
            <MyButton>Descargar</MyButton>
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
                        <Td> {cont.puntaje}</Td>
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
