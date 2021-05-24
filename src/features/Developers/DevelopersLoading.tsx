import React from 'react';
import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  SkeletonText,
  SkeletonCircle,
} from '@chakra-ui/react';

const DevelopersLoading = () => (
  <>
    <Heading my={6}>Developers</Heading>
    <SimpleGrid columns={[1, 2, 3]} spacing={8}>
      {[...new Array(10)].map((e, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <Box h={500} key={i} padding="6" boxShadow="lg" bg="white">
          <Center>
            <SkeletonCircle size="96px" />
          </Center>
          <br />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
          <br />
          <SkeletonText mt="4" noOfLines={2} spacing="4" />
          <SkeletonText mt="4" noOfLines={6} spacing="4" />
        </Box>
      ))}
    </SimpleGrid>
  </>
);

export default DevelopersLoading;
