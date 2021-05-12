export interface NavItem {
  label: string;
  href: string;
}

export interface Country {
  code: string;
  label: string;
}

export interface Developer {
  id: number;
  firstName: string;
  lastName: string;
  bio: string;
  imageUrl: string;
  country: Country;
  jobPosition: string;
  yearsOfExperience: number;
  rating: number;
  superPowers: Array<string>;
  technologies: Array<string>;
  linkedInUrl?: string;
  githubUrl?: string;
}
