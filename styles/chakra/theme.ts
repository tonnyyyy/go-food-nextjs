import { extendTheme } from "@chakra-ui/react";

const colors = {
  transparent: 'transparent',
  primary: '#B1464A',
  title: '#171923',
  titleLight: '#F6F6F6',
  subtitle: '#4A5568',
  subtitleLight: '#E0E0E0',
  p: '#718096',
  pLight: '#F6F6F6'
}

const theme = extendTheme({
  colors,
})

export default theme;