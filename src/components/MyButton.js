import { Button } from '@chakra-ui/react';

export function MyButton(props) {
    const onClick = (params)=>{
        props.handleClick()
    }
  return (
    <Button
      bg={props.outlined ? 'white' : '#7c4cf2'}
      borderColor={props.outlined ? '#7c4cf2' : ''}
      color={props.outlined ? '#7c4cf2' : 'white'}
      w="150px"
      variant={props.outlined ? 'outline' : 'solid'}
      onClick={props.handleClick && onClick}
      type={props.type || "button"}
      gap={3}
    >{props.children}
    </Button>
  );
}
