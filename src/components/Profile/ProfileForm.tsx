import * as React from 'react';
import { Box } from '@chakra-ui/react';

import PersonalInfoForm from './PersonalInfoForm';
import WorkExperienceForm from './WorkExperienceForm';
import SocialMediaForm from './SocialMediaForm';

const ProfileForm = () => (
  <>
    <Box bg={['white', 'gray.50']} p={[0, 10]}>
      <PersonalInfoForm />
      <WorkExperienceForm />
      <SocialMediaForm />
    </Box>
  </>
);

export default ProfileForm;
