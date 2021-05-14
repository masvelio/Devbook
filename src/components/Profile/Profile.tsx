import * as React from 'react';
import { Heading } from '@chakra-ui/react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import ProfileForm from './ProfileForm';
import Loading from '../Loading';

const Profile = () => (
  <>
    <Heading my={6}>My profile</Heading>
    <ProfileForm />
  </>
);

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});
