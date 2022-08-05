import { Button as ChakraButton, ButtonProps as ChakraButtonProps, Text } from '@chakra-ui/react';

export const Button: React.FC<ChakraButtonProps> = ({ ...props }) => {
  return (
    <ChakraButton
      {...props}
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
    >
      <Text>
        {props.children}
      </Text>
    </ChakraButton>
  )
}