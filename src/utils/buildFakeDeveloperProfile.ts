import faker from 'faker';
import sampleSize from 'lodash.samplesize';

import { Developer } from '../types';
import countries from './constants/countries';
import jobPositions from './constants/jobPositions';
import technologies from './constants/technologies';

const buildFakeDeveloperProfile = (): Developer => {
  const filteredCountries = countries.filter((c) => c.suggested);

  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    imageUrl: faker.image.avatar(),
    country:
      filteredCountries[
        Math.floor(Math.random() * (filteredCountries.length - 1))
      ],
    jobPosition:
      jobPositions[Math.floor(Math.random() * (filteredCountries.length - 1))],
    yearsOfExperience: Number((Math.random() * 10).toFixed(1)),
    rating: Math.floor(Math.random() * 3 + 3),
    superPowers: sampleSize(technologies, 2),
    technologies: sampleSize(technologies, 5),
    linkedInUrl: 'https://www.linkedin.com/',
    githubUrl: 'https://github.com/',
  };
};

export default buildFakeDeveloperProfile;
