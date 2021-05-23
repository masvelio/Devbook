/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { Button, Center, Box, useToast } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

import { useDeveloperProfileForm } from '../../context/developerProfileFormContext';
import DeveloperCard from '../Developers/DeveloperCard';
import {
  Developers,
  GetDevelopersProfileDocument,
} from '../../generated/graphql';
import GetSingleDevelopersProfile from '../../utils/queries/GetSingleDevelopersProfile';

export const CreateProfile = gql`
  mutation CreateProfile(
    $bio: String
    $country_code: String
    $first_name: String
    $github_url: String
    $image_url: String
    $job_position: String
    $last_name: String
    $linked_in_url: String
    $rating: Int
    $super_powers: jsonb
    $technologies: jsonb
    $user_id: String
    $years_of_experience: Int
  ) {
    insert_developers(
      objects: {
        bio: $bio
        country_code: $country_code
        first_name: $first_name
        github_url: $github_url
        image_url: $image_url
        job_position: $job_position
        last_name: $last_name
        linked_in_url: $linked_in_url
        rating: $rating
        super_powers: $super_powers
        technologies: $technologies
        user_id: $user_id
        years_of_experience: $years_of_experience
      }
      on_conflict: { constraint: developers_user_id_key }
    ) {
      returning {
        id
        bio
        country_code
        first_name
        github_url
        image_url
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
  }
`;

export const UpdateProfile = gql`
  mutation UpdateProfile($_set: developers_set_input, $_eq: String) {
    update_developers(where: { user_id: { _eq: $_eq } }, _set: $_set) {
      returning {
        bio
        country_code
        first_name
        github_url
        id
        image_url
        job_position
        last_name
        linked_in_url
        rating
        technologies
        user_id
        super_powers
        years_of_experience
      }
    }
  }
`;

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
          duration: 5000,
          isClosable: true,
        });
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
        { query: GetSingleDevelopersProfile, variables: { userId: user?.sub } },
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
