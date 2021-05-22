import * as React from 'react';
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  chakra,
  Collapse,
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
import { useDeveloperProfileForm } from '../../context/developerProfileFormContext';
import { WorkExperienceFormValues } from '../../types';

type ReactSelectOption = { value: string; label: string };
const SUPER_POWERS = 'superPowers';
const TECHNOLOGIES = 'technologies';

const WorkExperienceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
    setValue,
  } = useForm();
  const { saveFormPartially } = useDeveloperProfileForm();

  const onSubmit: SubmitHandler<WorkExperienceFormValues> = (data) => {
    saveFormPartially(data);
  };

  const handleArrayChange = (
    array: Array<ReactSelectOption>,
    formFieldName: string
  ) => {
    const value = array.map((el) => el.value);
    setValue(formFieldName, value, { shouldValidate: true });
  };

  const options = React.useMemo(
    () =>
      technologies.map((technology) => ({
        label: technology,
        value: technology,
      })),
    []
  );

  const getFieldValue = (
    fieldName: typeof TECHNOLOGIES | typeof SUPER_POWERS
  ) =>
    getValues(fieldName)?.map((str: string) => ({
      value: str,
      label: str,
    }));

  const isTechnologiesFieldInvalid = !!errors.technologies;
  const isSuperPowersFieldInvalid = !!errors.superPowers;

  const additionalStyles = {
    // makes border of the input red on error
    styles: {
      valueContainer: (provided: {}) => ({
        ...provided,
        border: '2px solid #E53E3E',
      }),
    },
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
              <Stack mt={4} spacing={3} fontSize="sm">
                <Collapse in={errors.jobPosition} animateOpacity>
                  <Alert status="error">
                    <AlertIcon />
                    Job Position is required
                  </Alert>
                </Collapse>
                <Collapse in={errors.yearsOfExp} animateOpacity>
                  <Alert status="error">
                    <AlertIcon />
                    Years of Experience is required
                  </Alert>
                </Collapse>
                <Collapse in={errors.superPowers} animateOpacity>
                  <Alert status="error">
                    <AlertIcon />
                    Super Powers are required
                  </Alert>
                </Collapse>
                <Collapse in={errors.technologies} animateOpacity>
                  <Alert status="error">
                    <AlertIcon />
                    Technologies are required
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
                      htmlFor={SUPER_POWERS}
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Super Powers
                    </FormLabel>

                    <Controller
                      name={SUPER_POWERS}
                      control={control}
                      defaultValue={[]}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <MultiSelect
                          isMulti
                          options={options}
                          id={SUPER_POWERS}
                          placeholder="Select Super Powers"
                          isInvalid={isSuperPowersFieldInvalid}
                          {...(isSuperPowersFieldInvalid && additionalStyles)}
                          {...field}
                          value={getFieldValue(SUPER_POWERS)}
                          onChange={(arr: Array<ReactSelectOption>) =>
                            handleArrayChange(arr, SUPER_POWERS)
                          }
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
                      htmlFor={TECHNOLOGIES}
                      color={useColorModeValue('gray.700', 'gray.50')}
                    >
                      Technologies
                    </FormLabel>

                    <Controller
                      name={TECHNOLOGIES}
                      control={control}
                      defaultValue={[]}
                      rules={{ required: true }}
                      render={({ field }) => (
                        <MultiSelect
                          isMulti
                          options={options}
                          id={TECHNOLOGIES}
                          placeholder="Select Technologies"
                          isInvalid={isTechnologiesFieldInvalid}
                          {...(isTechnologiesFieldInvalid && additionalStyles)}
                          {...field}
                          value={getFieldValue(TECHNOLOGIES)}
                          onChange={(arr: Array<ReactSelectOption>) =>
                            handleArrayChange(arr, TECHNOLOGIES)
                          }
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

export default WorkExperienceForm;
