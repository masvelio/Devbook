import * as React from 'react';
import {
  Box,
  Button,
  chakra,
  FormControl,
  FormHelperText,
  FormLabel,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';

import MultiSelect from '../Multiselect';
import technologies from '../../utils/constants/technologies';

type WorkExperienceFormValues = {
  jobPosition: string;
  yearsOfExp: string;
  superPowers: Array<string>;
  technologies: Array<string>;
};

const WorkExperienceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit: SubmitHandler<WorkExperienceFormValues> = (data) => {
    console.log('data', data);
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
                Work Experience Information
              </Heading>
              <Text
                mt={1}
                fontSize="sm"
                color={useColorModeValue('gray.600', 'gray.400')}
              >
                Enrich your profile by sharing information about your work
                experience and the technologies you specialize in.
              </Text>
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
                      htmlFor="jobPosition"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Job position
                    </FormLabel>
                    <Input
                      type="text"
                      id="jobPosition"
                      mt={1}
                      focusBorderColor="blue.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register('jobPosition', {
                        required: true,
                      })}
                      isInvalid={!!errors.jobPosition}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={[6, 3]}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      htmlFor="yearsOfExp"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Years Of Experience
                    </FormLabel>
                    <Input
                      min={0}
                      step={0.1}
                      type="number"
                      id="yearsOfExp"
                      mt={1}
                      focusBorderColor="blue.400"
                      shadow="sm"
                      size="sm"
                      w="full"
                      rounded="md"
                      {...register('yearsOfExp', {
                        required: true,
                      })}
                      isInvalid={!!errors.yearsOfExp}
                    />
                  </FormControl>

                  <FormControl as={GridItem} colSpan={6} id="email" mt={1}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      htmlFor="superPowers"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Super Powers
                    </FormLabel>

                    <Controller
                      name="superPowers"
                      control={control}
                      defaultValue={false}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <MultiSelect
                          id="superPowers"
                          placeholder="Select Super Powers"
                          isMulti
                          isInvalid={!!errors.superPowers}
                          options={technologies.map((technology) => ({
                            label: technology,
                            value: technology,
                          }))}
                          {...(!!errors.superPowers && {
                            styles: {
                              valueContainer: (provided: {}) => ({
                                ...provided,
                                border: '2px solid #E53E3E',
                              }),
                            },
                          })}
                          {...field}
                        />
                      )}
                    />

                    <FormHelperText>
                      Choose up to two technologies that you are a master at.
                    </FormHelperText>
                  </FormControl>

                  <FormControl as={GridItem} colSpan={6} id="email" mt={1}>
                    <FormLabel
                      fontSize="sm"
                      fontWeight="md"
                      htmlFor="technologies"
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Technologies
                    </FormLabel>

                    <Controller
                      name="technologies"
                      control={control}
                      defaultValue={false}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <MultiSelect
                          id="technologies"
                          placeholder="Select Technologies"
                          isMulti
                          {...(!!errors.technologies && {
                            styles: {
                              valueContainer: (provided: {}) => ({
                                ...provided,
                                border: '2px solid #E53E3E',
                              }),
                            },
                          })}
                          isInvalid={!!errors.technologies}
                          options={technologies.map((technology) => ({
                            label: technology,
                            value: technology,
                          }))}
                          {...field}
                        />
                      )}
                    />
                    <FormHelperText>
                      Choose the few remaining technologies you are comfortable
                      to work with.
                    </FormHelperText>
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

export default WorkExperienceForm;
