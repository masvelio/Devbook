import { gql } from '@apollo/client';

const GetSingleDevelopersProfile = gql`
  query GetMyDeveloperProfile($userId: String) {
    developers(where: { user_id: { _eq: $userId } }) {
      id
      first_name
      image_url
      bio
      github_url
      country_code
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
`;

export default GetSingleDevelopersProfile;
