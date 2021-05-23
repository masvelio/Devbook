import { Developers } from './generated/graphql';

export interface NavItem {
  label: string;
  href: string;
}

export interface Country {
  code: string;
  label: string;
}

export type PersonalInfoFormValues = Pick<
  Developers,
  'first_name' | 'last_name' | 'bio' | 'country_code' | 'image_url'
>;

export type WorkExperienceFormValues = Pick<
  Developers,
  'job_position' | 'years_of_experience' | 'super_powers' | 'technologies'
>;

export type SocialMediaFormValues = Pick<
  Developers,
  'github_url' | 'linked_in_url'
>;
