import * as React from 'react';
import { Heading } from '@chakra-ui/react';

import ProfileForm from './ProfileForm';

const Profile = () => (
  <>
    <Heading my={6}>My profile</Heading>
    <ProfileForm />
  </>
);

export default Profile;
