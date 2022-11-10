import {
  Heading,
  Box,
  FormControl,
  Textarea,
  FormLabel,
  VStack,
  HStack,
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  Spacer,
} from '@chakra-ui/react';
import { useState } from 'react';
import { MyButton } from '../components/MyButton';

export function Encuesta() {
    const [sliderValue, setSliderValue] = useState(5)
    const labelStyles = {
        mt: '2',
        ml: '0',
        fontSize: 'sm',
      }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log({positivo:e.target.positivo.value,
            negativo:e.target.negativo.value,
            puntaje:sliderValue});
    }
  return (
    <>
      <Heading>Encuesta de Satisfaccion</Heading>
      <Box border="1px solid gray" p={[10, 10]} minW="65vw">
        <form onSubmit={handleSubmit}>
            <VStack>
              <FormControl>
                <FormLabel>Contanos qué te gustó de la descarga</FormLabel>
                <Textarea
                  name="positivo"
                  size="md"
                  placeholder="Positivo"
                  resize="none"
                ></Textarea>
              </FormControl>
              <FormControl>
                <FormLabel>Contanos en qué podemos mejorar</FormLabel>
                <Textarea
                  name="negativo"
                  size="md"
                  placeholder="Negativo"
                  resize="none"
                  ></Textarea>
              </FormControl>
            </VStack>
    
            <Box pt={6} pb={2} mb={10}>
                  <Text>Tu puntaje final</Text>
                  <Text>{sliderValue}</Text>
              <Slider
                aria-label="slider-ex-1"
                max={10}
                min={1}
                colorScheme="purple"
                onChange={val => setSliderValue(val)}
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
            <Box align={"right"}>
            <MyButton type="submit">Enviar</MyButton>
            </Box>
        </form>
      </Box>
    </>
  );
}
