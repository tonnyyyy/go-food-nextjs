import { Badge, Box, Flex, Grid, GridItem, IconButton, Text, useTheme } from "@chakra-ui/react"
import { AiFillStar } from "react-icons/ai";
import { RiThumbUpLine } from "react-icons/ri"

interface IRestaurantCardProps {
  title: string
}

export const RestaurantCard: React.FC<IRestaurantCardProps> = ({ title }) => {
  const theme = useTheme();

  return (
    <Box bgColor='white' maxW={theme.__breakpoints?.asObject.sm} h='125px' position='relative' borderRadius='20px' flexShrink={0} flexGrow={1}>
      <IconButton
        size='sm'
        icon={<RiThumbUpLine size={20} />}
        aria-label='favorite item'
        variant='ghost' 
        css={{
          position: 'absolute',
          bottom: 10,
          left: 10,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.5)'
        }}
      />
      <Grid
        templateRows='12fr'
        templateColumns='6fr 6fr'
        gap={2}
        height='100%'
      >
        <GridItem
          borderRadius='20px'
          backgroundImage='img/restaurant-sample.jpg'
          backgroundPosition='center'
          backgroundSize='cover'
        >
        </GridItem>
        <GridItem pt={5} pb={3} overflow='hidden'>
          <Flex direction='column' justify='space-between' h='100%'>
            <Flex direction='inherit' justify='start' gap={1}>
              <Text fontSize='md' fontFamily='pt serif, serif' color='title' textOverflow='ellipsis' whiteSpace='nowrap' overflow='hidden'>{title}</Text>
                <Flex w='100%' direction='row' wrap='wrap-reverse' align='end' gap={2}>
                  <Badge borderRadius='30px' color='p'>dessert</Badge>
                  <Badge borderRadius='30px' color='p'>chicken</Badge>
                </Flex>
            </Flex>
            <Flex direction={['column', 'row']} justify='space-between' pr={5}>
              <Flex align='center' gap={1}>
                <AiFillStar color='#F7B142' /> 
                <Text color='title' fontSize='sm' fontFamily='montserrat, sans-serif'>4.5</Text>
              </Flex>
              <Text fontSize='sm' fontFamily='montserrat, sans-serif'>
                <Flex align='center' gap={1}>
                  <Text color='p' opacity='.8'>delivery</Text>
                  {/* <Text>$13.33</Text> */}
                  <Badge colorScheme='green'>Free</Badge>
                </Flex>
              </Text>
            </Flex>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  )
}