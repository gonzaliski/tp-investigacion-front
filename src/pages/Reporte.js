
import { Heading, Box, Text, HStack,Select, Stack,Spacer,Switch, TableContainer, Table, Thead, Tr,Td,Th,Tbody,Icon, Radio, RadioGroup } from '@chakra-ui/react';
import React from 'react';

import { FaMusic,FaFileAlt } from "react-icons/fa"
import { renderMatches, useNavigate } from 'react-router-dom';

import { MyButton } from '../components/MyButton';
import  { useEffect ,useState } from 'react'
import { reporteService } from '../services/ReporteService';


 
export function Reporte(){

    const [value, setValue] = React.useState("PUNTAJE")

    const [boton, setBoton] = React.useState(false)
     

  const[contenido , setContenido] = useState([])

  const filtroUsuario = ()=> {
       traerReporte()
       setBoton(!boton)
  }

  const traerReporte = async () => {
    if(boton) {
        setContenido(await reporteService.allInstanceUser(value))}
        else{
        setContenido(await reporteService.allInstance(value))}
   
  }

  const traerReporte2 = async()=> {
    setContenido(await reporteService.allInstance(value))}



  useEffect( () => {
    traerReporte()
  }, [value,boton])
  
    return(
    <>
    <Heading>Reporte Top-5</Heading>
        <Box>
            <Text align="left" fontSize='2xl'>Ordenar por</Text>
            <Box w="80vw" py="10px" px="15px" >
            <RadioGroup onChange={setValue} value={value}>
                <Stack  direction='row'>
                    <Radio colorScheme="purple" size='lg' value='PUNTAJE'>Puntaje promedio</Radio>
                    <Radio colorScheme="purple" size='lg' value='VELOCIDAD'>Velocidad</Radio>
                    <Radio  colorScheme="purple"  size='lg' value='TITULO'>Nombre</Radio>
                </Stack>
            </RadioGroup>
            </Box>

        <Box margin="20px">
            <Box display="flex" alignItems="center" gap="10px" paddingLeft="px" >
            <Text  fontSize='15px'>Solo archivos con mi puntaje</Text>
            <Switch 
            id="email-alerts"
            onChange = {() => filtroUsuario()}

            colorScheme='purple' 
            size='md' />
            </Box>
        </Box>
        <TableContainer>
            <Table>
                <Thead>
                    <Tr>
                        <Th  fontSize="lg">TITULO</Th>
                        <Th   fontSize="lg">Velocidad</Th>
                        <Th display="flex" justifyContent="center"  fontSize="lg">Puntaje Promedio de descarga</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {contenido.map(cont=>(
                    <Tr key={contenido.titulo}>
                        <Td > <Icon as={cont.tipo_contenido == "musica" ? FaMusic : FaFileAlt }/> {cont.titulo}</Td>
                        <Td> {cont.velocidadPromedio} Mbs</Td>
                        <Td display="flex"  justifyContent="center" > {cont.puntajePromedio}</Td>
                    </Tr>

                    ))}
                </Tbody>
            </Table>
        </TableContainer>
      </Box>








        </>
    )
}