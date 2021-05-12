import * as React from 'react';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Badge,
  Wrap,
  HStack,
  Link,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { Developer } from '../../types';
import countryToFlag from '../../utils/countryToFlag';

const DeveloperCard = ({ developer }: { developer: Developer }) => {
  const {
    imageUrl,
    firstName,
    lastName,
    jobPosition,
    country,
    rating,
    technologies,
    githubUrl,
    linkedInUrl,
  } = developer;

  return (
    <Center>
      <Box
        maxW="320px"
        w="full"
        bg="white"
        boxShadow="2xl"
        rounded="lg"
        p={6}
        textAlign="center"
        alignContent="center"
      >
        <Avatar size="xl" src={imageUrl} alt="Avatar Alt" mb={4} />
        <Heading fontSize="2xl" fontFamily="body">
          {firstName} {lastName}
        </Heading>
        <Text fontWeight={600} color="gray.500">
          {jobPosition}
        </Text>
        <Text fontWeight={400} color="gray.500" mb={4}>
          {countryToFlag(country.code)} {country.label}
        </Text>
        <Center>
          <Box d="flex" mt="2" alignItems="center">
            {Array(5)
              .fill('')
              .map((_, i) => (
                <StarIcon
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                  color={i < rating ? 'blue.500' : 'gray.300'}
                />
              ))}
          </Box>
        </Center>

        <Stack
          minH="110"
          align="center"
          justify="center"
          direction="row"
          mt={6}
        >
          <Wrap justify="center">
            {technologies.map((sp) => (
              <Badge key={sp} px={2} py={1} bg="gray.50" fontWeight="400">
                {sp}
              </Badge>
            ))}
          </Wrap>
        </Stack>

        <HStack justify="center" mt={4}>
          <Link href={githubUrl} isExternal _hover={{ textUnderline: 'none' }}>
            <Button size="sm" colorScheme="gray" leftIcon={<FaGithub />}>
              Github
            </Button>
          </Link>

          <Link
            href={linkedInUrl}
            isExternal
            _hover={{ textUnderline: 'none' }}
          >
            <Button
              size="sm"
              colorScheme="linkedin"
              boxShadow="0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              leftIcon={<FaLinkedin />}
            >
              LinkedIn
            </Button>
          </Link>
        </HStack>
        <HStack justify="center" mt={4}>
          <Link w="full" isExternal _hover={{ textUnderline: 'none' }}>
            <Button isFullWidth size="sm" colorScheme="blue">
              See more
            </Button>
          </Link>
        </HStack>
      </Box>
    </Center>
  );
};

export default DeveloperCard;
