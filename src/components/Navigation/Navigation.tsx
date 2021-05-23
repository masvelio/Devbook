import React from 'react';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Fade,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useAuth0 } from '@auth0/auth0-react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Navigation = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { logout } = useAuth0();

  return (
    <Box>
      <Flex
        bg="white"
        color="gray.600"
        minH="60px"
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor="gray.200"
        align="center"
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily="heading"
            color="gray.800"
          >
            💻
          </Text>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={6}
        >
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize="sm"
            fontWeight={600}
            colorScheme="blue"
            bg="blue.500"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Log out
          </Button>
        </Stack>
      </Flex>
      {isOpen && (
        <Box position="absolute" w="full">
          <Fade in={isOpen}>
            <MobileNav onClick={onToggle} />
          </Fade>
        </Box>
      )}
    </Box>
  );
};

export default Navigation;
