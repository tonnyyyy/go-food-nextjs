import React from "react";
import Head from "next/head";
import { Avatar, Box, Flex, IconButton, Text, useTheme } from "@chakra-ui/react";
import { TbLayoutList } from 'react-icons/tb';
import { GrLocation } from 'react-icons/gr';
import { BiSearch } from 'react-icons/bi';

import { Button } from "../components/button";
import { Input } from "../components/input";
import { ProductCard } from "../components/productCard";
import { RestaurantCard } from "../components/restaurantCard";
import { CategoryBadge } from "../components/categoryBadge";
import Link from "next/link";

const Dashboard: React.FC = () => {
  const testProductCount = 3;
  const theme = useTheme();

  return (
    <Box display='flex' flexDirection='column' gap='2rem' pb={5}>
      <Head>
        <title>GoFood | Dashboard</title>
      </Head>
      {/* top bar */}
      <Flex px={8} pt={8} justify='space-between' align='center'>
        <IconButton
          aria-label='expand navbar'
          variant='ghost'
          borderRadius='50%'
          icon={<TbLayoutList size='2rem' />}
        />
        <Button leftIcon={<GrLocation />} size='xl' height='2.75rem' px={3}>Suzano</Button>
        <Avatar boxSize='2rem' />
      </Flex>
      {/* search bar */}
      <Flex justify='center' w='100%'>
        <Box px={8} maxW={theme.__breakpoints?.asObject.md} flexGrow={1}>
          <Box position='relative'>
            <Input type='search' placeholder='Search here' pl='3rem' bgColor='white' />
            <BiSearch style={{ position: 'absolute', left:15, top: 15 }} size={30} />
          </Box>
        </Box>
      </Flex>
      {/* categories filter */}
      <Box
        overflowX='auto'
        // onMouseOut={() => } // CRIAR CONTEXTO PARA ESCONDE SCROLLBAR QUANDO NÃO ESTIVER EM USO
      >
        <Flex gap='6px' px={8} pb={4}>
          <CategoryBadge>Japanese</CategoryBadge>
          <CategoryBadge>Dessert</CategoryBadge>
          <CategoryBadge>Vegetarian</CategoryBadge>
          <CategoryBadge>Fast food</CategoryBadge>
        </Flex>
      </Box>
      {/* some food list */}
      <Box>
        <Text fontSize='lg' fontWeight='semibold' fontFamily='montserrat, sans-serif' px={8} pb={1} color='title'>Some food you may like</Text>
        <Flex
          wrap={['nowrap', 'wrap']}
          overflowX='auto'
          gap={4}
          px={8}
          pb={4}
          sx={{
            '&::-webkit-scrollbar': { 
              width: '8px',
              height: '8px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'primary',
              borderRadius: '4px'
            },
            '&::-webkit-scrollbar-track': {
              background: '#f1f1f1'
            },
          }}
        >
          {[0,0,0,0,0,0,0,0].map((v, i) => (
            <ProductCard key={v+i}/>
          ))}
        </Flex>
      </Box>
      {/* restaurant list */}
      <Box>
        <Text fontSize='lg' fontWeight='semibold' fontFamily='montserrat, sans-serif' px={8} pb={1} color='title'>Check out the restaurants</Text>
        <Flex direction={['column', 'row']} wrap={['nowrap', 'wrap']} gap={4} px={8}>
          {[{ title: 'Nihon Food' }, { 'title': 'BestNow Grill & Chicken aaaaa' }, { 'title': 'Cakes & Bakes' }].map((v, i) => (
            <RestaurantCard key={String(v)+i} title={v.title} />
          ))}
        </Flex>
      </Box>
      <Box
        mx={8}
        display='flex'
        justifyContent='center'
      >
        <Link href='restaurants'>
          <Button
            borderRadius='30px'
            maxW={theme.__breakpoints?.asObject.sm}
            h='2rem'
            textAlign='center'
            fontWeight='semibold'
            fontFamily='montserrat, sans-serif'
            backgroundColor='white'
          >
            See all
          </Button>
        </Link>
      </Box>
    </Box>
  )
};

export default Dashboard;