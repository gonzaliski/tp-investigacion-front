import { Heading, Box, Text, TableContainer, Table, Thead, Tr, Td, Th, Tbody, Icon, Flex } from '@chakra-ui/react';
import { FaMusic,FaFileAlt, FaDownload, FaEdit } from "react-icons/fa"
import { createSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { MyButton } from '../components/MyButton';
import { contenidoService } from './../services/ContenidoService';
import { user } from './../services/AuthService';
import { descargaService } from './../services/DescargaService';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'




export function Inicio() {
  const MySwal = withReactContent(Swal)
  const navigate = useNavigate()
  
  const goToEncuesta = (id) => {
    const params = {idDescarga: id}
    navigate({pathname: "/encuesta",replace:'true', search: `?${createSearchParams(params)}`})
  }

  const goToEditar = (idRespuesta) => {
    navigate(`/encuesta/editar/${idRespuesta}`,{replace:'true'})
  }

  const getAllContenidos = async () => {
    const content = await contenidoService.getAll()
    console.log(content);
    setContenidos(content)
  }

  const handleDownload = async (descarga) => {

    const refreshPage = () => {
      window.location.reload(false);
    }

    try{
      const descargaId = await descargaService.createDescarga(descarga)
      // goToEncuesta(descargaId.data)
      MySwal.fire({
        icon:'success',
        title: <Text size='3x1' fontWeight='bold'>Descarga realizada con exito</Text>,
        confirmButtonText: <MyButton >Realizar encuesta</MyButton>,
        showCancelButton: true,
        cancelButtonText: <MyButton outlined='true' >Regresar</MyButton>,
        cancelButtonColor: 'white'
      })
      .then((result) => {
        if(result.isConfirmed){
          goToEncuesta(descargaId.data)
        }
        else if (result.isDismissed || result.isDenied){
          refreshPage()
        }
      })
    } catch(e) {
      MySwal.fire({
        icon:'error',
        title: <Text size='3x1' fontWeight='bold'>Oops! Hubo un problema</Text>,
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: <p>Regresar</p>,
        cancelButtonColor: 'red'
      }).then((result) => {
        if (result.isDismissed || result.isDenied){
          navigate('/')  
        }
      })
    }

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
        <TableContainer>
            <Table>
                <Thead>
                    <Tr>
                        <Th fontSize="lg">Contenidos</Th>
                        <Th fontSize="lg">Velocidad</Th>
                        <Th fontSize="lg">Mi puntaje</Th>
                        <Th fontSize="lg">Puntaje Promedio</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {contenidos.map(cont=>(
                    <Tr key={cont.id}>
                        <Td> <Icon as={cont.tipoContenido === "musica" ? FaMusic : FaFileAlt }/> {cont.titulo}</Td>
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
