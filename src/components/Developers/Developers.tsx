import React from 'react';
import { SimpleGrid, Heading } from '@chakra-ui/react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { gql, useQuery } from '@apollo/client';

import DeveloperCard from './DeveloperCard';
import Loading from '../Loading';
import { GetMyDeveloperProfileQuery } from '../../generated/graphql';
import DevelopersLoading from './DevelopersLoading';

export const GetDevelopersProfile = gql`
  query GetDevelopersProfile {
    developers {
      id
      first_name
      image_url
      bio
      github_url
      country_code
      job_position
      last_name
      linked_in_url
      rating
      super_powers
      technologies
      user_id
      years_of_experience
    }
  }
`;

const Developers = () => {
  const { loading, error, data } =
    useQuery<GetMyDeveloperProfileQuery>(GetDevelopersProfile);

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
