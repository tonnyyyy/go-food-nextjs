import type { NextPage } from 'next';
import Head from 'next/head';

import {Box, Flex, Grid, GridItem, Text, useTheme, Badge } from '@chakra-ui/react';

import { Button } from '../components/button';
import { Input } from '../components/input';
import PageTransition from '../components/pageTransition';

import Link from 'next/link';
import { useState } from 'react';

const Login: NextPage = () => {
  const theme = useTheme();

  const [isRegistering, setIsRegistering] = useState<boolean>(false);

  const handleToggleRegister = () => {
    setIsRegistering(!isRegistering);
  }

  return (
    <Box bgColor='primary' h="100vh"> 
      <Head>
        <title>GoFood | Login</title>
      </Head>

      <Grid
        margin='0 auto'
        templateColumns='12fr'
        templateRows='1fr 7fr 4fr'
        height="100vh"
        gap={1}
        maxW={theme.__breakpoints?.asObject?.md}
      >
        <GridItem px={8} paddingTop={8}>
          <Text fontSize='3xl' color="subtitleLight" fontFamily='pt serif, serif'><Link href='/'>gofood</Link> / login</Text>
        </GridItem>

        <GridItem px={8}>
          <Flex pt={5} direction='column' gap={10} height="100%" justify="start">
            <Flex direction='inherit' gap={5}>
                <Text color='pLight' fontWeight='light'>
                  {"It seems you're not logged in :("}<br/>
                  {`Please, enter your username${isRegistering ? ', password and your full name.' : ' and password.'}`}
                </Text>
              <Input
                placeholder='Username'
                bgColor="#d8d8d866"
              />
              <Input
                type='password'
                placeholder='Password'
                bgColor="#d8d8d866"
              />
              {isRegistering && (
                <>
                  <Input
                    placeholder='First name'
                    bgColor="#d8d8d866"
                  />
                  <Input
                    placeholder='Last name'
                    bgColor="#d8d8d866"
                  />
                </>
              )}
            </Flex>
            {!isRegistering && <Button bgColor="#d8d8d866" color='pLight'>Sign in</Button>}
          </Flex>
        </GridItem>

        <GridItem px={8} pb={8}>
          <Flex direction='column' justify='end' height='100%' gap={3}>
            <Text fontSize='lg' color='pLight' textAlign='center'>
              {isRegistering ? (
                <p>Already registered? {' '}
                  <span onClick={handleToggleRegister}><Link href="">Back to login</Link></span>
                </p>
              ) : 'Not registered yet?'}
            </Text>
            {isRegistering ? (
              <Link href='dashboard'>
                <Button
                  bgColor='#d8d8d866'
                  color='pLight'
                >
                  Register and sign in
                </Button>
              </Link>
            ) : (
              <Button
              bgColor='#d8d8d866'
              color='pLight'
              onClick={handleToggleRegister}
            >
              Make a new account
            </Button>
            )}
          </Flex>
        </GridItem>
      </Grid>

    </Box>
  )
};

export default Login;
