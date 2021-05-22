import * as React from 'react';
import { Heading } from '@chakra-ui/react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { useQuery, gql } from '@apollo/client';

import ProfileForm from './ProfileForm';
import Loading from '../Loading';
import { DeveloperProfileFormProvider } from '../../context/developerProfileFormContext';

const GET_MY_DEVELOPER_PROFILE = gql`
  query GetMyDeveloperProfile($userId: String) {
    developers(where: { user_id: { _eq: $userId } }) {
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

const Profile = () => {
  const { user } = useAuth0();
  const { loading, error, data } = useQuery(GET_MY_DEVELOPER_PROFILE, {
    variables: { userId: user?.sub },
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error!</div>;
  }

  return (
    <>
      <Heading my={6}>My profile</Heading>
      <DeveloperProfileFormProvider formData={data.developers[0]}>
        <ProfileForm />
      </DeveloperProfileFormProvider>
    </>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});
