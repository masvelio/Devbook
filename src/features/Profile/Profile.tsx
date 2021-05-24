import React from 'react';
import { Heading } from '@chakra-ui/react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { useQuery } from '@apollo/client';
import { useErrorHandler } from 'react-error-boundary';

import Loading from 'components/Loading';
import { GetMyDeveloperProfileQuery } from 'graphql/generatedGraphql';
import GetSingleDevelopersProfile from './graphql/GetSingleDevelopersProfile';
import { DeveloperProfileFormProvider } from './context/developerProfileFormContext';
import ProfileForm from './ProfileForm';

const Profile = () => {
  const { user } = useAuth0();

  const { loading, error, data } = useQuery<
    GetMyDeveloperProfileQuery,
    { userId: string | undefined }
  >(GetSingleDevelopersProfile, { variables: { userId: user?.sub } });
  useErrorHandler(error);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Heading my={6}>My profile</Heading>
      <DeveloperProfileFormProvider formData={data?.developers[0] || {}}>
        <ProfileForm />
      </DeveloperProfileFormProvider>
    </>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});
