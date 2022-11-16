
import { Heading, Box, Text, HStack,Select, Stack,Spacer,Switch, TableContainer, Table, Thead, Tr,Td,Th,Tbody,Icon, Radio, RadioGroup } from '@chakra-ui/react';
import React from 'react';

import { FaMusic,FaFileAlt } from "react-icons/fa"
import { renderMatches, useNavigate } from 'react-router-dom';

import { MyButton } from '../components/MyButton';
import  { useEffect ,useState } from 'react'
import { reporteService } from '../services/ReporteService';


 
export function Reporte(){

    const [value, setValue] = React.useState("1")

    const [boton, setBoton] = React.useState(false)
     
   const orderby = (Lista) => {
    if(value == "1") return  sortPuntaje(Lista)
    if(value == "2") return  sortVelocidad(Lista)
    if(value == "3") return  sortTitulo(Lista)

   }  

  const sortTitulo = (contentList) => {
   return contentList.sort(function(a,b){
    if(a.titulo > b.titulo){
        return 1;
    }
    if(a.titulo < b.titulo){
        return -1;
    }
    return 0
   })
  } 
  const sortVelocidad = (contentList) => {
   return contentList.sort((a,b) => b.velocidadPromedio - a.velocidadPromedio)
  } 
  const sortPuntaje = (contentList) => {
   return contentList.sort((a, b) => a.puntajePromedio - b.puntajePromedio)
  }

  const[contenido , setContenido] = useState([])

  

  const filtroUsuario = ()=> {
       traerReporte()
       setBoton(!boton)
  }

  const traerReporte = async () => {
    if(boton != true ) {
        setContenido(await reporteService.allInstanceUser())}
        else{
        setContenido(await reporteService.allInstance())}
   
  }

  const traerReporte2 = async()=> {
    setContenido(await reporteService.allInstance())}



  useEffect( () => {
    traerReporte2()
  }, [])
  
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
                        <Th fontSize="lg">Historial de descargas</Th>
                        <Th fontSize="lg">Velocidad</Th>
                        <Th fontSize="lg">Puntaje Promedio de descarga</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {orderby(contenido).map(cont=>(
                    <Tr key={Math.random()}>
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