import EncuestaForm  from "../components/EncuestaForm"
import { Flex } from '@chakra-ui/react';
import { MyButton } from './../components/MyButton';
import { Icon } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { encuestaService } from './../services/EncuestaService';
import { contenidoService } from './../services/ContenidoService';

const EditarEncuesta = () => {

    const [encuesta, setEncuesta] = useState({})
    const navigate = useNavigate()
    
    const contId = useParams('id')
    const getEncuestaById = () => {
        const cont = encuestaService.getEncuestaById(+contId.id)
        setEncuesta(cont)
    }

    const handleSubmit = () => {
        setEncuesta(encuesta)
        encuestaService.actualizarEncuesta(encuesta)
        contenidoService.actualizarPuntaje(encuesta.id, encuesta.puntaje)
        navigate('/')
    }

    const handleDelete = () => {
        encuestaService.eliminarEncuesta(encuesta)
        navigate('/')
    }

    useEffect( () => {
        getEncuestaById(contId)
    })

    return (
        <EncuestaForm encuesta={encuesta} handleSubmit={handleSubmit}>
            <Flex justify='flex-end' gap={3}>
                <MyButton outlined='true' onClick={handleDelete}> <Icon as={FaTrashAlt} color='7c4cf2'/> Eliminar</MyButton>
                <MyButton type="submit">Guardar</MyButton>
            </Flex>
        </EncuestaForm>
    )
}

export default EditarEncuesta