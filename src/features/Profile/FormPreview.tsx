import React from 'react';
import { useMutation } from '@apollo/client';
import { Button, Center, Box, useToast } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

import {
  Developers,
  GetDevelopersProfileDocument,
} from 'graphql/generatedGraphql';
import GetSingleDevelopersProfile from './graphql/GetSingleDevelopersProfile';
import { useDeveloperProfileForm } from './context/developerProfileFormContext';
import UpdateProfile from './graphql/UpdateProfile';
import CreateProfile from './graphql/CreateProfile';
import DeveloperCard from '../Developers/DeveloperCard';

const FormPreview = () => {
  const toast = useToast();
  const history = useHistory();
  const { state, saveFormPartially } = useDeveloperProfileForm();
  const { user } = useAuth0();

  const [createProfile, { loading: createProfileLoading }] = useMutation(
    CreateProfile,
    {
      onCompleted: (developerData) => {
        const developerProfile = developerData.insert_developers.returning[0];
        saveFormPartially(developerProfile);
        history.push('/developers');
        toast({
          title: 'Profile created.',
          description: 'Added to the developers list.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      },
      onError: (err) => {
        toast({
          title: 'Profile not created',
          description: 'Check console for more details',
          status: 'error',
        });
        // eslint-disable-next-line no-console
        console.error(err);
      },
    }
  );

  const [updateProfile, { loading: updateProfileLoading }] = useMutation(
    UpdateProfile,
    {
      onCompleted: (developerData) => {
        const developerProfile = developerData.update_developers.returning[0];
        saveFormPartially(developerProfile);
        history.push('/developers');
        toast({
          title: 'Profile updated',
          status: 'success',
        });
      },
      onError: (err) => {
        toast({
          title: 'Profile not updated',
          description: 'Check console for more details',
          status: 'error',
        });
        // eslint-disable-next-line no-console
        console.error(err);
      },
    }
  );

  const createProfileHandler = async () => {
    const {
      bio = '',
      country_code,
      first_name,
      github_url,
      image_url,
      job_position,
      last_name,
      linked_in_url,
      super_powers,
      technologies,
      years_of_experience,
    } = state.formData as Developers;

    await createProfile({
      variables: {
        bio,
        country_code,
        first_name,
        github_url,
        image_url,
        job_position,
        last_name,
        linked_in_url,
        rating: 5,
        super_powers,
        technologies,
        user_id: user?.sub,
        years_of_experience,
      },
      refetchQueries: [
        { query: GetDevelopersProfileDocument },
        { query: GetSingleDevelopersProfile, variables: { userId: user?.sub } },
      ],
    });
  };

  const updateProfileHandler = async () => {
    const {
      bio = '',
      country_code,
      first_name,
      github_url,
      image_url,
      job_position,
      last_name,
      linked_in_url,
      super_powers,
      technologies,
      years_of_experience,
    } = state.formData as Developers;

    await updateProfile({
      variables: {
        _set: {
          bio,
          country_code,
          first_name,
          github_url,
          image_url,
          job_position,
          last_name,
          linked_in_url,
          super_powers,
          technologies,
          years_of_experience,
        },
        _eq: user?.sub,
      },
      refetchQueries: [
        { query: GetDevelopersProfileDocument },
        {
          query: GetSingleDevelopersProfile,
          variables: { userId: user?.sub },
        },
      ],
    });
  };

  const { isFormCompleted } = state;
  const profileAlreadyExists = state.formData?.id;
  const buttonLabel = profileAlreadyExists
    ? 'Update profile'
    : 'Create Profile';
  const buttonHandler = profileAlreadyExists
    ? updateProfileHandler
    : createProfileHandler;

  return (
    <>
      <Box mt="5">
        <DeveloperCard isPreview developer={state.formData} />
      </Box>
      <Center mt="10">
        <Button
          minW="300"
          isLoading={createProfileLoading || updateProfileLoading}
          loadingText="Loading"
          colorScheme="teal"
          spinnerPlacement="end"
          onClick={buttonHandler}
          disabled={!isFormCompleted}
        >
          {buttonLabel}
        </Button>
      </Center>
    </>
  );
};

export default FormPreview;
