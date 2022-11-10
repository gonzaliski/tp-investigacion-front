import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Avatar,
  Spacer,
  Heading,
} from '@chakra-ui/react';
import { MyButton } from './MyButton';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
export function NavBar() {
  const [active, setActive] = useState(true);
  const navigate = useNavigate()
  function handleActive(param){
    setActive(!active);
    navigate(param,{replace:true})
    //router go wherever
  };

  return (
    <Box w="100%" bg="gray.400" minH="40px" py="15px">
      <HStack px="20px">
        <HStack spacing={2}>
          <ButtonGroup>
            <MyButton handleClick={()=>handleActive("/")} outlined={active}>Inicio</MyButton>
          </ButtonGroup>
          <ButtonGroup>
            <MyButton handleClick={()=>handleActive("/reporte")} outlined={!active}>Reporte</MyButton>
          </ButtonGroup>
        </HStack>
        <Spacer></Spacer>
        <Avatar></Avatar>
        <Heading size="md" color="black">
          User
        </Heading>
        <ColorModeSwitcher color="black" />
      </HStack>
    </Box>
  );
}
