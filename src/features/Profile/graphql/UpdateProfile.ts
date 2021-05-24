import { gql } from '@apollo/client';

const UpdateProfile = gql`
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

export default UpdateProfile;
