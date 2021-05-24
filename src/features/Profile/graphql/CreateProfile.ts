import { gql } from '@apollo/client';

const CreateProfile = gql`
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

export default CreateProfile;
