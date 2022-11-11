import {
    Heading,
    Box,
    FormControl,
    Textarea,
    FormLabel,
    VStack,
    Slider,
    SliderMark,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Text,

} from '@chakra-ui/react';
import { useState, useEffect } from 'react'

const EncuestaForm = (props) => {

    const [encuesta, setEncuesta] = useState({})
    const [sliderValue, setSliderValue] = useState(5)
    const labelStyles = {
        mt: '2',
        ml: '0',
        fontSize: 'sm',
      }
    

    const getEncuesta = () => {
        if(props.encuesta){
            setEncuesta(props.encuesta)
        }
    }
    const actualizarEncuesta = (e) => {
        encuesta[e.target.name] = e.target.value
        setEncuesta({...encuesta})
    }
    const handleSliderChange = (val) => {
        setSliderValue(val)
        encuesta['puntaje'] = val
        setEncuesta({...encuesta})
        
    }

    useEffect(() => {
        getEncuesta()
    })

    return (
    <>
        
      <Heading>Encuesta de Satisfaccion</Heading>
      <Box border="1px solid gray" p={[10, 10]} minW="65vw">
        <form onSubmit={props.handleSubmit}>
            <VStack>
              <FormControl>
                <FormLabel>Contanos qué te gustó de la descarga</FormLabel>
                <Textarea
                  name="positivo"
                  size="md"
                  placeholder={!!encuesta.positivo? '' : "Positivo"}ze="none"
                  value={!!encuesta.positivo? encuesta.positivo  : ''}
                  onChange={(e) => actualizarEncuesta(e)}
                >
                </Textarea>
              </FormControl>
              <FormControl>
                <FormLabel>Contanos en qué podemos mejorar</FormLabel>
                <Textarea
                  name="negativo"
                  size="md"
                  placeholder={!!encuesta.negativo? '' : "Negativo"}
                  value={!!encuesta.negativo? encuesta.negativo  : ''}
                  resize="none"
                  onChange={(e) => actualizarEncuesta(e)}
                  >
                    
                </Textarea>
              </FormControl>
            </VStack>
    
            <Box pt={6} pb={2} mb={10}>
                  <Text>Tu puntaje final</Text>
                  <Text>{encuesta.puntaje || sliderValue}</Text>
              <Slider
                value={encuesta.puntaje || 5}
                aria-label="slider-ex-1"
                max={10}
                min={1}
                colorScheme="purple"
                onChange={val => handleSliderChange(val)}
              >
                <SliderMark value={1} {...labelStyles}>
                  1
                </SliderMark>
                <SliderMark value={10} {...labelStyles}>
                  10
                </SliderMark>
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </Box>
            {props.children}
        </form>
        </Box>
    </>)
    
}

export default EncuestaForm