import { Badge } from "@chakra-ui/react";

export const CategoryBadge: React.FC<React.PropsWithChildren> = (props) => {
  const { children } = props;

  const schemes = ['blue', 'red', 'green', 'yellow'];
  const randomColorScheme = schemes[Math.floor(Math.random() * schemes.length)];

  return (
    <Badge
      py={2}
      px={4}
      borderRadius='30px'
      // colorScheme={randomColorScheme}
      color='pLight'
      bgColor='primary'
      _hover={{
        filter: 'brightness(0.8)',
        cursor: 'pointer'
      }}
    >
      {children}
    </Badge>
  )
}