import * as React from 'react';
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';

import PersonalInfoForm from './PersonalInfoForm';
import WorkExperienceForm from './WorkExperienceForm';
import SocialMediaForm from './SocialMediaForm';
// import DeveloperCard from '../Developers/DeveloperCard';
import { useDeveloperProfileForm } from '../../context/developerProfileFormContext';
import FormPreview from './FormPreview';

const ProfileForm = () => {

  const { state, handleTabsChange } = useDeveloperProfileForm();
  const { currentTabIndex } = state;

  return (
    <Box bg={['white', 'gray.50']} p={[0, 10]}>
      <Tabs index={currentTabIndex} onChange={handleTabsChange}>
        <TabList>
          <Tab>Personal Info</Tab>
          <Tab>Work Experience</Tab>
          <Tab>Social Media</Tab>
          <Tab>Preview</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <PersonalInfoForm />
          </TabPanel>
          <TabPanel>
            <WorkExperienceForm />
          </TabPanel>
          <TabPanel>
            <SocialMediaForm />
          </TabPanel>
          <TabPanel>
            <FormPreview />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ProfileForm;
