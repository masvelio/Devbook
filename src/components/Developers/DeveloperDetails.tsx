import * as React from 'react';
import { useParams } from 'react-router-dom';
import {
  chakra,
  Box,
  Flex,
  Stack,
  Center,
  Image,
  Heading,
  Text,
  HStack,
  Link,
  Button,
  VStack,
} from '@chakra-ui/react';
import {
  FaGlobeEurope,
  FaTrophy,
  FaFileSignature,
  FaCode,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { IconType } from 'react-icons';

import useDeveloperDetails from '../../utils/hooks/useDeveloperDetails';
import countryToFlag from '../../utils/countryToFlag';
import Rating from '../Rating';

type DetailBlockProps = {
  CustomIcon: IconType;
  title: string;
  children: React.ReactNode;
};

const DetailBlock = ({ CustomIcon, title, children }: DetailBlockProps) => (
  <Flex>
    <Flex shrink={0}>
      <Flex
        alignItems="center"
        justifyContent="center"
        h={12}
        w={12}
        rounded="md"
        bg="blue.500"
        color="white"
      >
        <CustomIcon />
      </Flex>
    </Flex>
    <Box ml={4}>
      <chakra.dt
        fontSize="lg"
        fontWeight="medium"
        lineHeight="6"
        color="gray.900"
      >
        {title}
      </chakra.dt>
      <chakra.dd mt={2} color="gray.500">
        {children}
      </chakra.dd>
    </Box>
  </Flex>
);

const DeveloperDetails = () => {
  const { id } = useParams();
  const { developer } = useDeveloperDetails(Number(id));

  if (!developer) {
    return (
      <VStack mt={100}>
        <Image w={400} src="/developer-not-found.png" />
        <Heading textAlign="center">Developer not found</Heading>
      </VStack>
    );
  }

  const {
    firstName,
    lastName,
    imageUrl,
    jobPosition,
    bio,
    country,
    rating,
    yearsOfExperience,
    technologies,
    superPowers,
    githubUrl,
    linkedInUrl,
  } = developer;
  return (
    <>
      <Box py={12} bg="white" rounded="xl">
        <Box maxW="7xl" mx="auto" px={{ base: 4, lg: 8 }}>
          <Center mb={4}>
            <Image
              borderRadius="full"
              boxSize="150px"
              src={imageUrl}
              alt={firstName}
            />
          </Center>

          <Box textAlign={{ lg: 'center' }}>
            <Text
              mt={2}
              fontSize={{ base: '3xl', sm: '4xl' }}
              fontWeight="extrabold"
              color="gray.900"
            >
              {firstName} {lastName}
            </Text>
            <Text
              color="gray.600"
              fontWeight="semibold"
              textTransform="uppercase"
            >
              {jobPosition}
            </Text>

            <Text mt={4} maxW="2xl" mx={{ lg: 'auto' }} color="gray.500">
              {bio}
            </Text>
          </Box>

          <Box mt={10}>
            <Stack
              spacing={{ base: 10, md: 0 }}
              display={{ md: 'grid' }}
              gridTemplateColumns={{ md: 'repeat(2,1fr)' }}
              gridColumnGap={{ md: 8 }}
              gridRowGap={{ md: 10 }}
            >
              <DetailBlock title="Country" CustomIcon={FaGlobeEurope}>
                {countryToFlag(country.code)} {country.label}
              </DetailBlock>

              <DetailBlock title="Rating" CustomIcon={FaTrophy}>
                <Rating rating={rating} />
              </DetailBlock>

              <DetailBlock title="Experience" CustomIcon={FaFileSignature}>
                <Text>{yearsOfExperience} years of experience</Text>
              </DetailBlock>

              <DetailBlock title="Technologies" CustomIcon={FaCode}>
                <Text fontWeight="bold">{superPowers.join(', ')}</Text>
                <Text>{technologies.join(', ')}</Text>
              </DetailBlock>
            </Stack>
          </Box>

          <Center mt={8}>
            <HStack justify="center" mt={4}>
              <Link
                href={githubUrl}
                isExternal
                _hover={{ textUnderline: 'none' }}
              >
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
          </Center>
        </Box>
      </Box>
    </>
  );
};

export default DeveloperDetails;
