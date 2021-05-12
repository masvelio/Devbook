import * as React from 'react';
import { SimpleGrid, Heading } from '@chakra-ui/react';

import DeveloperCard from './DeveloperCard';
import developers from '../../utils/constants/developers';

const Developers = () => (
  <>
    <Heading my={6}>Developers</Heading>
    <SimpleGrid columns={[1, 2, 3]} spacing={8}>
      {developers.map((developerProfile) => (
        <DeveloperCard
          key={developerProfile.firstName + developerProfile.lastName}
          developer={developerProfile}
        />
      ))}
    </SimpleGrid>
  </>
);

export default Developers;
