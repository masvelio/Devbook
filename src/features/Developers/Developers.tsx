import React from 'react';
import { SimpleGrid, Heading } from '@chakra-ui/react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import { useGetDevelopersProfileQuery } from 'graphql/generatedGraphql';
import Loading from 'components/Loading';
import DeveloperCard from './DeveloperCard';
import DevelopersLoading from './DevelopersLoading';

const Developers = () => {
  const { loading, error, data } = useGetDevelopersProfileQuery();

  if (loading) {
    return <DevelopersLoading />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Heading my={6}>Developers</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {data?.developers.map((developerProfile) => (
          <DeveloperCard
            key={developerProfile.id}
            developer={developerProfile}
          />
        ))}
      </SimpleGrid>
    </>
  );
};

export default withAuthenticationRequired(Developers, {
  onRedirecting: () => <Loading />,
});
