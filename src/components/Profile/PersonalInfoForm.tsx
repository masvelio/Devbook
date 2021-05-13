import {
  Avatar,
  Box,
  Button,
  chakra,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Icon,
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
  Fade,
  Collapse,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import countries from '../../utils/constants/countries';
import countryToFlag from '../../utils/countryToFlag';
import { Country } from '../../types';

type PersonalInfoFormValues = {
  firstName: string;
  lastName: string;
  shortBio: string;
  country: Country;
  photoUrl: string;
};

const PersonalInfoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<PersonalInfoFormValues> = (data) =>
    console.log(data);

  console.log('errors', errors);

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
                <Collapse in={errors.firstName} animateOpacity>
                  <Alert status="error">
                    <AlertIcon />
                    First Name is required
                  </Alert>
                </Collapse>
                <Collapse in={errors.lastName} animateOpacity>
                  <Alert status="error">
                    <AlertIcon />
                    Last Name is required
                  </Alert>
                </Collapse>
                <Collapse in={errors.shortBio} animateOpacity>
                  <Alert status="error">
                    <AlertIcon />
                    Short Bio is required
                  </Alert>
                </Collapse>
                <Collapse in={errors.country} animateOpacity>
                  <Alert status="error">
                    <AlertIcon />
                    Country is required
                  </Alert>
                </Collapse>
                <Collapse in={errors.photoUrl} animateOpacity>
                  <Alert status="error">
                    <AlertIcon />
                    Photo URL is required
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
                      htmlFor="firstName"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      First name
                    </FormLabel>
                    <Input
                      type="text"
                      id="firstName"
                      mt={1}
                      focusBorderColor="blue.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register('firstName', {
                        required: true,
                      })}
                      isInvalid={!!errors.firstName}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      htmlFor="lastName"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Last name
                    </FormLabel>
                    <Input
                      type="text"
                      id="lastName"
                      mt={1}
                      focusBorderColor="blue.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      isInvalid={errors.lastName}
                      {...register('lastName', {
                        required: true,
                      })}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={6} id="email" mt={1}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      htmlFor="shortBio"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Short Bio
                    </FormLabel>
                    <Textarea
                      placeholder="Write here a few sentences about your achievements or motivation to work. This text will be displayed as a summary on your profile."
                      mt={1}
                      rows={6}
                      shadow="sm"
                      id="shortBio"
                      focusBorderColor="blue.400"
                      fontSize={{ sm: 'sm' }}
                      {...register('shortBio', {
                        required: true,
                      })}
                      isInvalid={errors.shortBio}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      htmlFor="country"
                      fontSize="sm"
                      fontWeight="md"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Country
                    </FormLabel>
                    <Select
                      id="country"
                      placeholder="Select option"
                      mt={1}
                      focusBorderColor="blue.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register('country', {
                        required: true,
                      })}
                      isInvalid={errors.country}
                    >
                      {countries.map((country) => (
                        <option key={country.code}>
                          {countryToFlag(country.code)} {country.label}
                        </option>
                      ))}
                    </Select>
                  </FormControl>

                  <FormControl as={GridItem} colSpan={6}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      htmlFor="photoUrl"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Photo
                    </FormLabel>
                    <Flex
                      direction={['column', 'row']}
                      alignItems="center"
                      mt={1}
                    >
                      <Avatar
                        mr="6"
                        mb={[4, 0]}
                        boxSize={16}
                        bg={useColorModeValue('gray.100', 'gray.800')}
                        icon={
                          <Icon
                            as={FaUser}
                            boxSize={10}
                            mt={1}
                            rounded="full"
                            color={useColorModeValue('gray.300', 'gray.700')}
                          />
                        }
                      />
                      <InputGroup size="sm">
                        <InputLeftAddon
                          bg={useColorModeValue('gray.50', 'gray.800')}
                          color={useColorModeValue('gray.500', 'gay.50')}
                          rounded="md"
                        >
                          https://
                        </InputLeftAddon>
                        <Input
                          type="text"
                          placeholder="www.example.com"
                          id="photoUrl"
                          focusBorderColor="blue.400"
                          rounded="md"
                          {...register('photoUrl', {
                            required: true,
                          })}
                          isInvalid={errors.photoUrl}
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
                  Save
                </Button>
              </Box>
            </chakra.form>
          </GridItem>
        </SimpleGrid>
      </Box>
      <Box visibility={{ base: 'hidden', sm: 'visible' }} aria-hidden="true">
        <Box py={5}>
          <Box
            borderTop="solid 1px"
            borderTopColor={useColorModeValue('gray.200', 'whiteAlpha.200')}
          />
        </Box>
      </Box>
    </>
  );
};

export default PersonalInfoForm;
