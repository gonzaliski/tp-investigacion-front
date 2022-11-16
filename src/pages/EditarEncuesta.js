import EncuestaForm  from "../components/EncuestaForm"
import { Flex } from '@chakra-ui/react';
import { MyButton } from './../components/MyButton';
import { Icon } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { encuestaService } from './../services/EncuestaService';

const EditarEncuesta = () => {

    const [encuesta, setEncuesta] = useState({})
    const navigate = useNavigate()
    
    const encId = useParams('idEncuesta')
    
    const getEncuestaById = async () => {
        const enc = await encuestaService.getEncuestaById(+encId.idRespuesta)
        setEncuesta(enc)
    }
   
    const handleSubmit = async(e) => {
        e.preventDefault()
        setEncuesta(encuesta)
        await encuestaService.actualizarEncuesta(encuesta)
        navigate('/')
    }

    const handleDelete =  async () => {
        await  encuestaService.eliminarEncuesta(encuesta)
        navigate('/')
    }

    useEffect( () => {
        getEncuestaById()
        // eslint-disable-next-line
    }, [])

    return (
        <EncuestaForm encuesta={encuesta} handleSubmit={handleSubmit}>
            <Flex justify='flex-end' gap={3}>
                <MyButton outlined='true' handleClick={handleDelete}> <Icon as={FaTrashAlt} color='#7c4cf2'/> Eliminar</MyButton>
                <MyButton type="submit">Guardar</MyButton>
            </Flex>
        </EncuestaForm>
    )
}

export default EditarEncuesta