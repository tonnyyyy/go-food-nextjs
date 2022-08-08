import { Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react"

export const Input: React.FC<ChakraInputProps> = ({...props}) => {
  return (
    <ChakraInput
    variant='filled'
    borderRadius="30px"
    height="3.5rem"
    color='pLight'
    _placeholder={{ color: 'pLight' }}
    _focusVisible={{
      transition: '.2s',
      _placeholder: {
        color: 'p'
      },
      color: 'p',
      background: 'whitesmoke'
    }}
    _hover={{
      transition: '.2s',
      _placeholder: {
        color: 'p'
      },
      color: 'pLight'
    }}
    transition=".2s"
    {...props}
  />
  )
}