import * as React from 'react';
import { SimpleGrid, Heading } from '@chakra-ui/react';

import ProfileCard from '../Profile/ProfileCard';

const Developers = () => (
  <>
    <Heading my={6}>Developers</Heading>
    <SimpleGrid columns={[1, 2, 3]} spacing={8}>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </SimpleGrid>
  </>
);

export default Developers;
