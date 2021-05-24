import React from 'react';
import {
  Box,
  Icon,
  Text,
  Alert,
  Input,
  Stack,
  Button,
  chakra,
  Heading,
  Collapse,
  GridItem,
  AlertIcon,
  FormLabel,
  InputGroup,
  SimpleGrid,
  FormControl,
  InputLeftAddon,
  useColorModeValue,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { SocialMediaFormValues } from 'utils/types';
import { useDeveloperProfileForm } from './context/developerProfileFormContext';

const schema = yup.object().shape({
  github_url: yup.string().url(),
  linked_in_url: yup.string().url(),
});

const SocialMediaForm = () => {
  const {
    state: { formData: { github_url, linked_in_url } = { ...{} } },
    saveFormPartially,
  } = useDeveloperProfileForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      github_url,
      linked_in_url,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<SocialMediaFormValues> = (data) => {
    saveFormPartially(data);
  };

  return (
    <>
      <Box>
        <SimpleGrid
          display={{ base: 'initial', md: 'grid' }}
          columns={{ md: 3 }}
          spacing={{ md: 6 }}
        >
          <GridItem colSpan={{ md: 1 }}>
            <Box px={[4, 0]}>
              <Heading fontSize="lg" fontWeight="medium" lineHeight="6">
                Social Media Information
              </Heading>
              <Text
                mt={1}
                fontSize="sm"
                color={useColorModeValue('gray.600', 'gray.400')}
              >
                Share your social media so you can be contacted more easily.
              </Text>

              <Stack mt={4} spacing={3} fontSize="sm">
                <Collapse in={!!errors.github_url} animateOpacity>
                  <Alert status="error">
                    <AlertIcon />
                    Github URL is invalid. Use form: https://github.com/profile
                  </Alert>
                </Collapse>
                <Collapse in={!!errors.linked_in_url} animateOpacity>
                  <Alert status="error">
                    <AlertIcon />
                    LinkedIn URL is invalid. Use form:
                    https://linkedin.com/profile
                  </Alert>
                </Collapse>
              </Stack>
            </Box>
          </GridItem>
          <GridItem mt={[5, null, 0]} colSpan={{ md: 2 }}>
            <chakra.form
              shadow="base"
              rounded={[null, 'md']}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Stack
                px={4}
                py={5}
                p={[null, 6]}
                bg={useColorModeValue('white', 'gray.700')}
                spacing={6}
              >
                <SimpleGrid columns={6} spacing={6}>
                  <FormControl as={GridItem} colSpan={6}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      htmlFor="github_url"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Github URL
                    </FormLabel>
                    <InputGroup size="sm">
                      <InputLeftAddon
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        color={useColorModeValue('gray.500', 'gay.50')}
                        rounded="md"
                      >
                        <Icon
                          as={FaGithub}
                          boxSize={4}
                          mt={0}
                          rounded="full"
                          color={useColorModeValue('gray.400', 'gray.700')}
                        />
                      </InputLeftAddon>
                      <Input
                        type="text"
                        id="github_url"
                        placeholder="https://github.com/your_profile"
                        focusBorderColor="blue.400"
                        rounded="md"
                        {...register('github_url')}
                        isInvalid={!!errors.github_url}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl as={GridItem} colSpan={6}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      htmlFor="linked_in_url"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      LinkedIn URL
                    </FormLabel>
                    <InputGroup size="sm">
                      <InputLeftAddon
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        color={useColorModeValue('gray.500', 'gay.50')}
                        rounded="md"
                      >
                        <Icon
                          as={FaLinkedin}
                          boxSize={4}
                          mt={0}
                          rounded="full"
                          color={useColorModeValue('gray.400', 'gray.700')}
                        />
                      </InputLeftAddon>
                      <Input
                        type="text"
                        id="linked_in_url"
                        placeholder="https://www.linkedin.com/in/your_profile/"
                        focusBorderColor="blue.400"
                        rounded="md"
                        {...register('linked_in_url')}
                        isInvalid={!!errors.linked_in_url}
                      />
                    </InputGroup>
                  </FormControl>
                </SimpleGrid>
              </Stack>
              <Box
                px={{ base: 4, sm: 6 }}
                py={3}
                bg={useColorModeValue('gray.50', 'gray.900')}
                textAlign="right"
              >
                <Button
                  type="submit"
                  colorScheme="blue"
                  _focus={{ shadow: '' }}
                  fontWeight="md"
                >
                  Continue
                </Button>
              </Box>
            </chakra.form>
          </GridItem>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default SocialMediaForm;
