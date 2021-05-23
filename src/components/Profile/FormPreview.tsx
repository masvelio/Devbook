/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { Button, Center, Box, useToast } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';

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

const FormPreview = () => {
  const { state, saveFormPartially } = useDeveloperProfileForm();
  const { user } = useAuth0();
  const { isFormCompleted } = state;
  const buttonLabel = state.formData?.id ? 'Update profile' : 'Create Profile';
  const toast = useToast();

  const [createProfile, { loading: createProfileLoading }] = useMutation(
    CreateProfile,
    {
      onCompleted: (developerData) => {
        toast({
          title: 'Profile created.',
          description: 'Added to the developers list.',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        const developerProfile = developerData.insert_developers.returning[0];
        saveFormPartially(developerProfile);
      },
    }
  );

  const saveProfile = async () => {
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

  return (
    <>
      <Box mt="5">
        <DeveloperCard isPreview developer={state.formData} />
      </Box>
      <Center mt="10">
        <Button
          minW="300"
          isLoading={createProfileLoading}
          loadingText="Loading"
          colorScheme="teal"
          spinnerPlacement="end"
          onClick={saveProfile}
          disabled={!isFormCompleted}
        >
          {buttonLabel}
        </Button>
      </Center>
    </>
  );
};

export default FormPreview;
