import * as React from 'react';
import { SimpleGrid, Heading } from '@chakra-ui/react';

import DeveloperCard from './DeveloperCard';
import buildFakeDeveloperProfile from '../../utils/buildFakeDeveloperProfile';
import { Developer } from '../../types';

const developersList: Array<Developer> = [...new Array(30)].map(
  buildFakeDeveloperProfile
);

const Developers = () => (
  <>
    <Heading my={6}>Developers</Heading>
    <SimpleGrid columns={[1, 2, 3]} spacing={8}>
      {developersList.map((developerProfile) => (
        <DeveloperCard
          key={developerProfile.firstName + developerProfile.lastName}
          developer={developerProfile}
        />
      ))}
    </SimpleGrid>
  </>
);

export default Developers;
