
import { Heading, Box, Text, HStack,Select, Stack,Spacer,Switch, TableContainer, Table, Thead, Tr,Td,Th,Tbody,Icon, Radio, RadioGroup } from '@chakra-ui/react';
import React from 'react';

import { FaMusic,FaFileAlt } from "react-icons/fa"
import { useNavigate } from 'react-router-dom';

import { MyButton } from '../components/MyButton';
import  { useState } from 'react'


 
export function Reporte(){

    const [value, setValue] = React.useState('1')
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
  
    return(
        <>
       <Heading>Reporte Top-5</Heading>
      <Box>
      <Text align="left" fontSize='2xl'>Ordenar por</Text>
        <Box w="80vw" py="10px" px="15px" >
                <RadioGroup onChange={setValue} value={value}>
            <Stack  direction='row'>
                <Radio colorScheme="purple" size='lg' value='1'>Puntaje promedio</Radio>
                <Radio colorScheme="purple" size='lg' value='2'>Velocidad</Radio>
                <Radio  colorScheme="purple"  size='lg' value='3'>Nombre</Radio>
            </Stack>
            </RadioGroup>
        </Box>

        <Box margin="20px">
            <Table display="flex" alignItems="center" gap="10px" paddingLeft="px" >
            <Text  fontSize='15px'>Solo archivos con mi puntaje</Text>
            <Switch colorScheme='purple' size='md' />
            </Table>
        </Box>
        <TableContainer>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Historial de descargas</Th>
                        <Th>Velocidad</Th>
                        <Th>Puntaje Promedio de descarga</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {contenidos.map(cont=>(
                    <Tr key={cont.id}>
                        <Td > <Icon as={cont.tipo_contenido == "musica" ? FaMusic : FaFileAlt }/> {cont.titulo}</Td>
                        <Td> {cont.velocidad}</Td>
                        <Td display="flex"  justifyContent="center" > {cont.puntaje_promedio}</Td>
                    </Tr>

                    ))}
                </Tbody>
            </Table>
        </TableContainer>
      </Box>








        </>
    )
}