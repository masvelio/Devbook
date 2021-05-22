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
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link as RouteLink } from 'react-router-dom';

import { Developer } from '../../types';
import countryToFlag from '../../utils/countryToFlag';
import Rating from '../Rating';
import defaultTechnologies from '../../utils/constants/technologies';

const TechnologiesBadges = ({
  shouldDisplayPlaceholderTechnologies,
  selectedTechnologies,
}: {
  shouldDisplayPlaceholderTechnologies: boolean;
  selectedTechnologies: Array<string>;
}) => {
  const arr = shouldDisplayPlaceholderTechnologies
    ? defaultTechnologies.slice(0, 4)
    : selectedTechnologies;

  return (
    <>
      {arr.map((sp) => (
        <Badge key={sp} px={2} py={1} bg="gray.50" fontWeight="400">
          {sp}
        </Badge>
      ))}
    </>
  );
};

const DeveloperCard = ({
  developer,
  isPreview = false,
}: {
  developer: Developer;
  isPreview?: boolean;
}) => {
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
    id,
  } = developer;

  const isNameAvailable = firstName && lastName;
  const shouldDisplayPlaceholderTechnologies =
    isPreview && (!technologies || technologies?.length === 0);

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
        <Heading
          fontSize="2xl"
          color={isNameAvailable ? 'gray.500' : 'gray.200'}
          fontFamily="body"
        >
          {isNameAvailable ? `${firstName} ${lastName}` : 'Adam Smith'}
        </Heading>
        <Text fontWeight={600} color="gray.500">
          {jobPosition || 'Job Position'}
        </Text>
        <Text fontWeight={400} color="gray.500" mb={4}>
          {countryToFlag(country?.code)} {country?.label}
        </Text>
        <Center>
          <Rating rating={rating} />
        </Center>

        <Stack
          minH="110"
          align="center"
          justify="center"
          direction="row"
          mt={6}
        >
          <Wrap justify="center">
            <TechnologiesBadges
              selectedTechnologies={technologies}
              shouldDisplayPlaceholderTechnologies={
                shouldDisplayPlaceholderTechnologies
              }
            />
          </Wrap>
        </Stack>

        <HStack justify="center" mt={4}>
          <Link href={githubUrl} isExternal _hover={{ textUnderline: 'none' }}>
            <Button
              size="sm"
              colorScheme="gray"
              leftIcon={<FaGithub />}
              disabled={!githubUrl}
            >
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
              disabled={!linkedInUrl}
            >
              LinkedIn
            </Button>
          </Link>
        </HStack>
        <HStack justify="center" mt={4}>
          <Link
            w="full"
            _hover={{ textUnderline: 'none' }}
            as={RouteLink}
            to={`/developers/${id}`}
          >
            <Button
              isFullWidth
              disabled={isPreview}
              size="sm"
              colorScheme="blue"
            >
              See more
            </Button>
          </Link>
        </HStack>
      </Box>
    </Center>
  );
};

export default DeveloperCard;
