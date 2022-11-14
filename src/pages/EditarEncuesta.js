import EncuestaForm  from "../components/EncuestaForm"
import { Flex } from '@chakra-ui/react';
import { MyButton } from './../components/MyButton';
import { Icon } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { encuestaService } from './../services/EncuestaService';
import { contenidoService } from './../services/ContenidoService';
import { user } from './../services/AuthService';

const EditarEncuesta = () => {

    const [encuesta, setEncuesta] = useState({})
    const navigate = useNavigate()
    
    const contId = useParams('id')
    const getEncuestaById = async () => {
        const cont = await encuestaService.getEncuestaById(user.id, +contId.id)
        setEncuesta(cont)
        console.log('encu',cont);
    }

    // const handleSubmit = () => {
    //     setEncuesta(encuesta)
    //     encuestaService.actualizarEncuesta(encuesta)
    //     contenidoService.actualizarPuntaje(encuesta.id, encuesta.puntaje)
    //     navigate('/')
    // }   
     const handleSubmit = (e) => {
        e.preventDefault()
        setEncuesta(encuesta)
        encuestaService.actualizarEncuesta(encuesta)
        navigate('/')
    }

    const handleDelete = () => {
        encuestaService.eliminarEncuesta(encuesta)
        navigate('/')
    }

    useEffect( () => {
        getEncuestaById()
    }, [])

    return (
        <EncuestaForm encuesta={encuesta} handleSubmit={handleSubmit}>
            <Flex justify='flex-end' gap={3}>
                <MyButton outlined='true' onClick={handleDelete}> <Icon as={FaTrashAlt} color='#7c4cf2'/> Eliminar</MyButton>
                <MyButton type="submit">Guardar</MyButton>
            </Flex>
        </EncuestaForm>
    )
}

export default EditarEncuesta