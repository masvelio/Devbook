import React from 'react';
import { Heading } from '@chakra-ui/react';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { useQuery } from '@apollo/client';

import ProfileForm from './ProfileForm';
import Loading from '../Loading';
import { DeveloperProfileFormProvider } from '../../context/developerProfileFormContext';
import { GetMyDeveloperProfileQuery } from '../../generated/graphql';
import GetSingleDevelopersProfile from '../../utils/queries/GetSingleDevelopersProfile';

const Profile = () => {
  const { user } = useAuth0();

  const { loading, error, data } = useQuery<
    GetMyDeveloperProfileQuery,
    { userId: string | undefined }
  >(GetSingleDevelopersProfile, { variables: { userId: user?.sub } });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error!</div>;
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
