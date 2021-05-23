import React from 'react';
import { Heading } from '@chakra-ui/react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

import ProfileForm from './ProfileForm';
import Loading from '../Loading';
import { DeveloperProfileFormProvider } from '../../context/developerProfileFormContext';
import { useGetMyDeveloperProfileQuery } from '../../generated/graphql';

const Profile = () => {
  const { user } = useAuth0();

  const { data, loading, error } = useGetMyDeveloperProfileQuery({
    variables: {
      userId: user?.sub,
    },
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
      <DeveloperProfileFormProvider formData={data?.developers[0]}>
        <ProfileForm />
      </DeveloperProfileFormProvider>
    </>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});
