/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import { gql, useMutation } from '@apollo/client';
import { Button, Center, Box } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';

import { useDeveloperProfileForm } from '../../context/developerProfileFormContext';
import DeveloperCard from '../Developers/DeveloperCard';
import { Developers } from '../../generated/graphql';

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
      }
    }
  }
`;

const FormPreview = () => {
  const { state } = useDeveloperProfileForm();
  const { user } = useAuth0();
  const { isFormCompleted, formData } = state;
  console.log('is', isFormCompleted);
  console.log('formData', formData);
  const buttonLabel = state.formData?.id ? 'Update profile' : 'Create Profile';
  const [createProfile, { loading: createProfileLoading }] =
    useMutation(CreateProfile);

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
