/* eslint-disable @typescript-eslint/naming-convention */
import React from 'react';
import {
  Box,
  Button,
  chakra,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  Alert,
  AlertIcon,
  Collapse,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import countries from '../../utils/constants/countries';
import { countryCodeToFlag } from '../../utils/countryUtils';
import { PersonalInfoFormValues } from '../../types';
import { useDeveloperProfileForm } from '../../context/developerProfileFormContext';

const schema = yup.object().shape({
  image_url: yup.string().url().required(),
});

const PersonalInfoForm = () => {
  const {
    state: {
      formData: { first_name, last_name, bio, country_code, image_url } = {
        ...{},
      },
    },
  } = useDeveloperProfileForm();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      first_name,
      last_name,
      bio,
      country_code,
      image_url,
    },
    resolver: yupResolver(schema),
  });

  const watchImageUrl = watch('image_url', image_url);
  const { saveFormPartially } = useDeveloperProfileForm();
  const onSubmit: SubmitHandler<PersonalInfoFormValues> = (data) => {
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
                Personal Information
              </Heading>
              <Text
                mt={1}
                fontSize="sm"
                color={useColorModeValue('gray.600', 'gray.400')}
              >
                Start completing your profile by providing basic information
                about yourself.
              </Text>
              <Stack mt={4} spacing={3} fontSize="sm">
                <Collapse in={!!errors.first_name} animateOpacity>
                  <Alert status="error">
                    <AlertIcon />
                    First Name is required
                  </Alert>
                </Collapse>
                <Collapse in={!!errors.last_name} animateOpacity>
                  <Alert status="error">
                    <AlertIcon />
                    Last Name is required
                  </Alert>
                </Collapse>
                <Collapse in={!!errors.bio} animateOpacity>
                  <Alert status="error">
                    <AlertIcon />
                    Short Bio is required
                  </Alert>
                </Collapse>
                <Collapse in={!!errors.country_code} animateOpacity>
                  <Alert status="error">
                    <AlertIcon />
                    Country is required
                  </Alert>
                </Collapse>
                <Collapse in={!!errors.image_url} animateOpacity>
                  <Alert status="error">
                    <AlertIcon />
                    {errors.image_url?.message?.replace(
                      'image_url',
                      'Photo URL'
                    )}
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
                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      htmlFor="first_name"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      First name
                    </FormLabel>
                    <Input
                      type="text"
                      id="first_name"
                      mt={1}
                      focusBorderColor="blue.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register('first_name', {
                        required: true,
                      })}
                      isInvalid={!!errors.first_name}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      htmlFor="last_name"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Last name
                    </FormLabel>
                    <Input
                      type="text"
                      id="last_name"
                      mt={1}
                      focusBorderColor="blue.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      isInvalid={!!errors.last_name}
                      {...register('last_name', {
                        required: true,
                      })}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={6} id="email" mt={1}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      htmlFor="bio"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Short Bio
                    </FormLabel>
                    <Textarea
                      placeholder="Write here a few sentences about your achievements or motivation to work. This text will be displayed as a summary on your profile."
                      mt={1}
                      rows={6}
                      shadow="sm"
                      id="bio"
                      focusBorderColor="blue.400"
                      fontSize={{ sm: 'sm' }}
                      {...register('bio', {
                        required: true,
                      })}
                      isInvalid={!!errors.bio}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="country_code"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Country
                    </FormLabel>
                    <Select
                      id="country_code"
                      placeholder="Select option"
                      mt={1}
                      focusBorderColor="blue.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register('country_code', {
                        required: true,
                      })}
                      isInvalid={!!errors.country_code}
                    >
                      {countries.map((country) => (
                        <option key={country.code} value={country.code}>
                          {countryCodeToFlag(country.code)} {country.label}
                        </option>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl as={GridItem} colSpan={6}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      htmlFor="image_url"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Photo
                    </FormLabel>
                    <Flex
                      direction={['column', 'row']}
                      alignItems="center"
                      mt={1}
                    >
                      <Image
                        mr="6"
                        fallbackSrc="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                        borderRadius="full"
                        boxSize="64px"
                        src={watchImageUrl}
                        alt="Developer Profile"
                      />

                      <InputGroup size="sm">
                        <InputLeftAddon
                          bg={useColorModeValue('gray.50', 'gray.800')}
                          color={useColorModeValue('gray.500', 'gay.50')}
                          rounded="md"
                        >
                          URL
                        </InputLeftAddon>
                        <Input
                          type="text"
                          placeholder="www.example.com"
                          id="image_url"
                          focusBorderColor="blue.400"
                          rounded="md"
                          {...register('image_url')}
                          isInvalid={!!errors.image_url}
                        />
                      </InputGroup>
                    </Flex>
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

export default PersonalInfoForm;
