import { Button as ChakraButton, ButtonProps as ChakraButtonProps, Text } from '@chakra-ui/react';

export const Button: React.FC<ChakraButtonProps> = ({ ...props }) => {
  return (
    <ChakraButton
    size="lg"
    borderRadius="30"
    _hover={{
      transition: '.2s',
        filter: 'brightness(1.15)'
      }}
      _active={{
        transition: '.2s',
        filter: 'brightness(.7)'
      }}
      transition='.2s'
      height="3.5rem"
      {...props}
    >
      <Text>
        {props.children}
      </Text>
    </ChakraButton>
  )
}