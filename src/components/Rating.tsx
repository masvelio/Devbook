import React from 'react';
import { Box } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

import { Developers } from 'graphql/generatedGraphql';

const Rating = ({ rating }: { rating: Developers['rating'] }) => (
  <Box d="flex" mt="2" alignItems="center">
    {Array(5)
      .fill('')
      .map((_, i) => (
        <StarIcon
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          color={i < rating ? 'blue.500' : 'gray.300'}
        />
      ))}
  </Box>
);

export default Rating;
