import React from 'react';
import { CircularProgress, Flex } from '@chakra-ui/react';

const Loading = () => (
  <Flex justify="center" align="center" h="100vh">
    <CircularProgress isIndeterminate color="blue.500" />
  </Flex>
);

export default Loading;
