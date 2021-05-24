import React from 'react';
import {
  Box,
  Flex,
  Text,
  Stack,
  Button,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';

import BlurBackground from './BlurBackground';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Flex minH="100vh" align="center" justify="center">
      <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
        <Stack align="center">
          <Text
            textAlign="center"
            bgGradient="linear(to-l, #00B4DB,#0083B0)"
            bgClip="text"
            fontSize={['40px', '80px']}
            fontWeight="extrabold"
            lineHeight="1"
            mb="4"
          >
            Welcome to Devbook
          </Text>
          <Heading textAlign="center" fontSize={['xl', '4xl']}>
            Sign in to your account
          </Heading>
        </Stack>
        <Box
          rounded="lg"
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow="lg"
          p={8}
        >
          <Stack spacing={4}>
            <Stack spacing={10}>
              <Button
                bg="blue.400"
                color="white"
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={loginWithRedirect}
              >
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
      <BlurBackground
        position="absolute"
        top={10}
        left={-10}
        style={{ filter: 'blur(200px)' }}
      />
    </Flex>
  );
};

export default Login;
