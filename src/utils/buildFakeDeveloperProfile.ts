import faker from 'faker';
import sampleSize from 'lodash.samplesize';

import { Developers } from 'graphql/generatedGraphql';
import countries from './constants/countries';
import jobPositions from './constants/jobPositions';
import technologies from './constants/technologies';

/** Function used for mocking data before the database was hooked up */
const buildFakeDeveloperProfile = (): Omit<
  Developers,
  'user_id' | 'id' | 'bio'
> => {
  const filteredCountries = countries.filter((c) => c.suggested);

  return {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    image_url: faker.image.avatar(),
    country_code:
      filteredCountries[
        Math.floor(Math.random() * (filteredCountries.length - 1))
      ].code,
    job_position:
      jobPositions[Math.floor(Math.random() * (filteredCountries.length - 1))],
    years_of_experience: Number((Math.random() * 10).toFixed(1)),
    rating: Math.floor(Math.random() * 3 + 3),
    super_powers: sampleSize(technologies, 2),
    technologies: sampleSize(technologies, 5),
    linked_in_url: 'https://www.linkedin.com/',
    github_url: 'https://github.com/',
  };
};

export default buildFakeDeveloperProfile;
