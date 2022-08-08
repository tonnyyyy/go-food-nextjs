import { Box, Flex, Grid, GridItem, IconButton, Text } from "@chakra-ui/react"
import Link from "next/link"
import { AiFillStar } from "react-icons/ai"
import { RiThumbUpLine } from "react-icons/ri"

export const ProductCard: React.FC<React.PropsWithChildren> = () => {
  const handleFavoriteProduct = () => {
    console.log('Favorite food')
  }  

  return (
    <Box bgColor='white' pb={4} w='200px' h='250px' position='relative' borderRadius='20px' flexShrink={0}>
      <IconButton
        size='sm'
        icon={<RiThumbUpLine size={20} />}
        aria-label='favorite item'
        variant='ghost' 
        css={{
          position: 'absolute',
          top: 10,
          right: 10,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.5)'
        }}
        onClick={handleFavoriteProduct}
      />
      <Grid
        templateColumns='12fr'
        templateRows='9fr 1fr 1fr 1fr'
        gap={1}
        height='100%'
      >
        <GridItem
          borderRadius='20px 20px 0 0'
          backgroundImage='img/temaki-sample.png'
          backgroundPosition='center'
          backgroundSize='cover'
          mb={3}
        > 
        </GridItem>
        <GridItem px={5}><Text fontSize='md' fontFamily='pt serif, serif' color='title'>Original  Temaki</Text></GridItem>
        <GridItem px={5}>
          <Text display='flex' gap={1} fontSize='md' fontFamily='pt serif, serif'>
            from
            <Text color='p' opacity='.8'><Link href='dashboard'>Nihon Foods</Link></Text>
          </Text>
        </GridItem>
        <GridItem px={5}>
          <Flex justify='space-between'>
            <Text fontSize='md' fontFamily='montserrat, sans-serif'>$13.33</Text>
            <Text>
              <Flex align='center' gap={1}>
                <AiFillStar color='#F7B142' /> 
                4.5
              </Flex>
            </Text>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  )
}